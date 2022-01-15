import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Carousel from "../src/components/Carousel";
import { CategoryNav, HomeSlide, ShowcaseCategory } from "../types/home";
import Image from "next/image";
import NavPill from "../src/components/NavPill";
import { useState } from "react";
import ProductBox from "../src/components/ProductBox";
import { products } from "../src/utils/dummyData";

const PageContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`;

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

const SlideButton = styled.button`
  font-size: 0.82rem;
  padding: 7px 0;
  margin-top: 28px;
  text-transform: uppercase;
  background-color: transparent;
  color: #000;
  border: none;
  border-bottom: 2px solid #000;
  transition: all 0.4s ease 0s;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #ab8e66;
    border-color: #ab8e66;
  }
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

const slides = HOME_SLIDES.map((val, idx) => {
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
            {Number(val.priceRangeValue).toLocaleString("en-NG", {
              currency: "NGN",
              style: "currency",
            })}
          </span>
        </SlidePriceInfo>
        <SlideButton>{val.buttonText}</SlideButton>
      </SlideTextGroup>
    </Slide>
  );
});

const Home: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState<ShowcaseCategory>(
    ShowcaseCategory.bestseller
  );

  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel slides={slides} />
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
          {products.map((val, idx) => (
            <ProductBox
              name={val.name}
              image={val.image}
              originalPrice={val.originalPrice}
              rating={val.rating}
              salesExist={val.salesExist}
              salesPrice={val?.salesPrice}
              isNew={val.isNew}
            />
          ))}
        </CategoryProducts>
      </CategoryShowcase>
    </PageContainer>
  );
};

export default Home;
