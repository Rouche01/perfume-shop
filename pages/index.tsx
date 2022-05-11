import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Carousel from "../src/components/Carousel";
import { CategoryNav, HomeSlide } from "../src/types/home";
import Image from "next/image";
import NavPill from "../src/components/NavPill";
import React, { useMemo, useState, useEffect } from "react";
import ProductBox from "../src/components/ProductBox";
import { shopFeatures } from "../src/utils/dummyData";
import Banner from "../src/components/Banner";
import { LineButton } from "../src/components/Button";
import FeatureItem from "../src/components/FeatureItem";
import { useCurrencyConverter } from "../src/hooks/currency";
import { useCurrencyContext } from "../src/utils/currencyProvider";
import { PageContainer } from "../src/generalStyles";
import { useProductsLazyQuery } from "../src/graphql/generated/graphql";

const Slide = styled.div`
  background-color: #efefef;
  padding: 24px 32px;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
`;

const SlideTextGroup = styled.div`
  width: 400px;
`;

const SlideMajorTitle = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  font-weight: 600;
  color: #ab8e66;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const SlideSupportTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 2.375rem;
  font-weight: 500;
  line-height: 1.2;
`;

const SlidePriceInfo = styled.p`
  font-size: 1.125rem;
  color: #666666;
  font-weight: 500;
  letter-spacing: -0.05em;
  margin: 0;
  padding: 0;
`;

const CategoryShowcase = styled.div`
  margin-top: 65px;
  margin-bottom: 60px;
`;

const CategoryNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
`;

const CategoryProducts = styled.div`
  margin-top: 60px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

const SubFooter = styled.div`
  /* width: 100%; */
  background-color: #ab8e66;
  margin: 0 -1000px;
`;

const SubFooterInner = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 120px;
  max-width: 1280px;
  margin: auto;
`;

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
      <Slide key={`home-slides-${idx}`}>
        <Image src={val.heroImg} width={500} height={500} alt="slideshow" />
        <SlideTextGroup>
          <SlideMajorTitle>{val.mainTitle}</SlideMajorTitle>
          <SlideSupportTitle>{subtitleJSX()}</SlideSupportTitle>
          <SlidePriceInfo>
            Price from:{" "}
            <span
              style={{
                fontSize: "1.75rem",
                color: "#ab8e66",
                fontWeight: "600",
              }}
            >
              {priceFormatter(val.priceRangeValue)}
            </span>
          </SlidePriceInfo>
          <LineButton>{val.buttonText}</LineButton>
        </SlideTextGroup>
      </Slide>
    );
  });
};

const Home: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryNav>({
    title: "Bestseller",
    id: "BESTSELLER",
    sortBy: "name:asc",
  });

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formattedSlides = useMemo(() => slides(formatPrice), [currencyInfo]);

  const [query, { data: productsPreview, loading }] = useProductsLazyQuery();

  useEffect(() => {
    const fetchSortedProducts = async (sortBy: string) =>
      await query({ variables: { sortBy: [sortBy] } });

    (async () => await fetchSortedProducts(activeCategory.sortBy))();
  }, [activeCategory, query]);

  const miniProductShowcase = useMemo(() => {
    return productsPreview?.products?.data.slice(0, 8);
  }, [productsPreview]);

  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel slides={formattedSlides} />
      <CategoryShowcase>
        <CategoryNavContainer>
          {categoryNavigations.map((category) => (
            <NavPill
              clickFn={() => {
                console.log(category.id);
                setActiveCategory(category);
              }}
              title={category.title}
              key={category.id}
              active={category.id === activeCategory.id}
            />
          ))}
        </CategoryNavContainer>
        <CategoryProducts>
          {miniProductShowcase?.map(({ id, attributes }, idx) => (
            <ProductBox
              key={attributes?.sku}
              name={attributes?.name}
              image={attributes?.mainImage.data?.attributes?.url}
              originalPrice={formatPrice(attributes?.originalPrice as number)}
              rating={3}
              salesExist={attributes?.onSales}
              salesPrice={formatPrice(attributes?.salesPrice as number)}
              isNew={true}
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
    </PageContainer>
  );
};

export default Home;
