import { FC, useEffect, useMemo, useState } from "react";
import Carousel from "@/components/Carousel";
import { CategoryNav, HomeSlide } from "@/types/home";
import { CarouselSlide } from "./partials";
import { useCurrencyContext } from "@/utils/currencyProvider";
import { useCurrencyConverter } from "@/hooks/currency";
import { useRouter } from "next/router";
import NavPill from "@/components/NavPill";
import { useProductsLazyQuery } from "@/graphql/generated/graphql";
import ProductBox from "@/components/ProductBox";
import Banner from "@/components/Banner";
import { shopFeatures } from "@/utils/dummyData";
import FeatureItem from "@/components/FeatureItem";

import {
  CategoryShowcase,
  CategoryNavContainer,
  CategoryProducts,
  SubFooter,
  SubFooterInner,
} from "./styles";

const categoryNavigations: CategoryNav[] = [
  {
    title: "Bestseller",
    id: "BESTSELLER",
    sortBy: "name:asc",
  },
  {
    title: "New Arrivals",
    id: "NEW_ARRIVALS",
    sortBy: "createdAt:desc",
  },
  {
    title: "Top Rated",
    id: "TOP_RATED",
    sortBy: "name:desc",
  },
];

const HOME_SLIDES: HomeSlide[] = [
  {
    heroImg: "/perfume-bottle-01.png",
    mainTitle: "New Arrivals",
    supportingTitle: "Trending Collections",
    priceRangeValue: 15000,
    buttonText: "Shop Now",
  },
  {
    heroImg: "/perfume-bottle-02.png",
    mainTitle: "The Bestsellers",
    supportingTitle: "Bestselling Collections",
    priceRangeValue: 18000,
    buttonText: "Shop Now",
  },
];

const slides = (priceFormatter: (price: number) => string) => {
  return HOME_SLIDES.map((val, idx) => {
    const subtitleWds = val.supportingTitle.split(" ");
    const subtitleJSX = (): JSX.Element => (
      <>
        {subtitleWds[0]} <br /> {subtitleWds[1]}
      </>
    );

    return (
      <CarouselSlide
        buttonText={val.buttonText}
        heroImg={val.heroImg}
        key={`home-slides-${idx}`}
        priceFormatter={priceFormatter}
        priceRangeValue={val.priceRangeValue}
        subtitleComponent={subtitleJSX}
        title={val.mainTitle}
      />
    );
  });
};

interface Props {}

const HomePageView: FC<Props> = ({}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryNav>({
    title: "Bestseller",
    id: "BESTSELLER",
    sortBy: "name:asc",
  });

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const router = useRouter();
  const formattedSlides = useMemo(() => {
    return HOME_SLIDES.map((val, idx) => {
      const subtitleWds = val.supportingTitle.split(" ");
      const subtitleJSX = (): JSX.Element => (
        <>
          {subtitleWds[0]} <br /> {subtitleWds[1]}
        </>
      );

      return (
        <CarouselSlide
          buttonText={val.buttonText}
          heroImg={val.heroImg}
          key={`home-slides-${idx}`}
          priceFormatter={formatPrice}
          priceRangeValue={val.priceRangeValue}
          subtitleComponent={subtitleJSX}
          title={val.mainTitle}
        />
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyInfo]);

  const [query, { data: productsPreview, loading }] = useProductsLazyQuery();

  useEffect(() => {
    const fetchSortedProducts = async (sortBy: string) =>
      await query({ variables: { sortBy: [sortBy] } });

    (async () => await fetchSortedProducts(activeCategory.sortBy))();
  }, [activeCategory, query]);

  const miniProductShowcase = useMemo(() => {
    return productsPreview?.products?.data.slice(0, 8);
  }, [productsPreview]);

  const onHandleProductClick = (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <>
      <Carousel slides={formattedSlides} />
      <CategoryShowcase>
        <CategoryNavContainer>
          {categoryNavigations.map((category) => (
            <NavPill
              clickFn={() => setActiveCategory(category)}
              title={category.title}
              key={category.id}
              active={category.id === activeCategory.id}
            />
          ))}
        </CategoryNavContainer>
        <CategoryProducts>
          {miniProductShowcase?.map(({ id, attributes }, idx) => (
            <ProductBox
              slug={attributes?.slug!}
              key={attributes?.sku}
              name={attributes?.name}
              image={attributes?.mainImage.data?.attributes?.url}
              originalPrice={formatPrice(attributes?.originalPrice as number)}
              rating={3}
              salesExist={attributes?.onSales}
              salesPrice={formatPrice(attributes?.salesPrice as number)}
              isNew={true}
              handleProductClick={onHandleProductClick}
            />
          ))}
        </CategoryProducts>
      </CategoryShowcase>
      <Banner
        title="Perfect For Gifts"
        subtitle="Looking for the best gift items for your friends & loved ones? Come and shop with us!"
        priceInfo={formatPrice(20000)}
      />
      <SubFooter>
        <SubFooterInner>
          {shopFeatures.map(({ body, icon, title }, idx) => (
            <FeatureItem
              key={`feature-${idx}`}
              body={body}
              title={title}
              icon={icon}
              mode="dark"
            />
          ))}
        </SubFooterInner>
      </SubFooter>
    </>
  );
};

export default HomePageView;
