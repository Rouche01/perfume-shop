import { FC } from "react";
import { LineButton, PageTitle } from "@/components/shared";
import FeatureItem from "@/components/FeatureItem";
import { shopFeatures } from "@/utils/dummyData";

import {
  Banner,
  BannerInfo,
  BannerText,
  BannerTitle,
  FeatureContainer,
  LineBreaker,
  Pitch,
  PitchBody,
  PitchHeader,
} from "./styles";

interface Props {}

const AboutPageView: FC<Props> = ({}) => {
  return (
    <>
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
          For 30 years we have been selling the widest range of women&apos;s
          perfumes and men&apos;s aftershaves at affordable prices. We stock the
          fragrances of nearly 130 brands including Hugo Boss, Paco Rabanne,
          Gucci, Ariana Grande and Marc Jacobs both online and across our
          network of over 215 nationwide stores. We also stock the luxury
          perfume brands Dior, Viktor & Rolf and Hermès.
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
          members, click and collect in 30 minutes and we&apos;ve even
          introduced a “Try Me” option on some of our most popular products
          where you&apos;ll receive a free sample, so if you&apos;re choosing a
          new perfume or aftershave you can smell that before you open your
          order.
        </PitchBody>
      </Pitch>
    </>
  );
};

export default AboutPageView;
