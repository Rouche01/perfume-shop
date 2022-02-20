import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Carousel from "../src/components/Carousel";
import { CategoryNav, HomeSlide, ShowcaseCategory } from "../src/types/home";
import Image from "next/image";
import NavPill from "../src/components/NavPill";
import React, { useMemo, useState } from "react";
import ProductBox from "../src/components/ProductBox";
import { products, shopFeatures } from "../src/utils/dummyData";
import Banner from "../src/components/Banner";
import { LineButton } from "../src/components/Button";
import FeatureItem from "../src/components/FeatureItem";
import { useCurrencyConverter } from "../src/hooks/currency";
import { useCurrencyContext } from "../src/utils/currencyProvider";
import { PageContainer } from "../src/generalStyles";

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
  },
  {
    title: "New Arrivals",
    id: "NEW_ARRIVALS",
  },
  {
    title: "Top Rated",
    id: "TOP_RATED",
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
        <Image src={val.heroImg} width={500} height={500} />
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
  const [activeCategory, setActiveCategory] = useState<ShowcaseCategory>(
    ShowcaseCategory.bestseller
  );

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const formattedSlides = useMemo(() => slides(formatPrice), [currencyInfo]);

  const sortedAndFilteredProducts = () => {
    switch (activeCategory) {
      case ShowcaseCategory.bestseller:
        return products;
      case ShowcaseCategory.new:
        const newArrivals = products.filter((product) => product.isNew);
        return newArrivals;
      case ShowcaseCategory.topRated:
        const topRated = products.sort((a, b) => b.rating - a.rating);
        return topRated;
      default:
        return [];
    }
  };

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
          {categoryNavigations.map(({ title, id }) => (
            <NavPill
              clickFn={() => {
                console.log(id);
                setActiveCategory(id as ShowcaseCategory);
              }}
              title={title}
              key={id}
              active={id === activeCategory}
            />
          ))}
        </CategoryNavContainer>
        <CategoryProducts>
          {sortedAndFilteredProducts().map((val, idx) => (
            <ProductBox
              key={val.image}
              name={val.name}
              image={val.image}
              originalPrice={formatPrice(val.originalPrice)}
              rating={val.rating}
              salesExist={val.salesExist}
              salesPrice={formatPrice(val?.salesPrice)}
              isNew={val.isNew}
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
