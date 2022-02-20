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
    </PageContainer>
  );
};

export default About;
