import Head from "next/head";
import React, { FC } from "react";
import { PageContainer, PageTitle } from "../src/generalStyles";
import styled from "styled-components";
import { LineButton } from "../src/components/Button";
import { shopFeatures } from "../src/utils/dummyData";
import FeatureItem from "../src/components/FeatureItem";

const Banner = styled.div`
  width: 100%;
  background-image: url("./banner-image.jpg");
  background-size: cover;
  background-repeat: none;
  height: 350px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

const BannerInfo = styled.div`
  width: 100%;
  padding: 0 35px;
`;

const LineBreaker = styled.span`
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid #eee;
  margin-top: 0px;
`;

const BannerTitle = styled.h2`
  color: #000;
  font-size: 2.125rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
`;

const BannerText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: #666;
  margin-top: 20px;
`;

const FeatureContainer = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 120px;
  max-width: 1280px;
  margin: auto;
`;

const Pitch = styled.div`
  width: 100%;
  margin: 50px 0 80px;
`;

const PitchHeader = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const PitchBody = styled.p`
  padding: 0;
  text-align: center;
  color: #666;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
`;

const About: FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | About us</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle>About Us</PageTitle>
      <Banner>
        <div></div>
        <BannerInfo>
          <BannerTitle>New Collection for you</BannerTitle>
          <BannerText>
            Shop the latest products right here. We have the best perfumes and
            fragrances from top brands
          </BannerText>
          <LineButton>Shop Now</LineButton>
        </BannerInfo>
      </Banner>
      <FeatureContainer>
        {shopFeatures.map((feature, idx) => {
          return (
            <FeatureItem
              key={`feature-${idx}`}
              body={feature.body}
              icon={feature.icon}
              title={feature.title}
              mode="light"
            />
          );
        })}
      </FeatureContainer>
      <LineBreaker />
      <Pitch>
        <PitchHeader>Why Choose Us?</PitchHeader>
        <PitchBody>
          For 30 years we have been selling the widest range of women's perfumes
          and men's aftershaves at affordable prices. We stock the fragrances of
          nearly 130 brands including Hugo Boss, Paco Rabanne, Gucci, Ariana
          Grande and Marc Jacobs both online and across our network of over 215
          nationwide stores. We also stock the luxury perfume brands Dior,
          Viktor & Rolf and Hermès.
        </PitchBody>
        <PitchBody>
          Not only do we have the experience of selling perfumes, we also have
          the expertise to match. Our staff are trained and developed so that
          they are the most knowledgeable sales advisors within the perfume
          industry and we can even boast about having the largest number of
          fragrance graduates nationwide.
        </PitchBody>
        <PitchBody>
          Online we offer FREE standard delivery on all orders for our VIP
          members, click and collect in 30 minutes and we've even introduced a
          “Try Me” option on some of our most popular products where you'll
          receive a free sample, so if you're choosing a new perfume or
          aftershave you can smell that before you open your order.
        </PitchBody>
      </Pitch>
    </PageContainer>
  );
};

export default About;
