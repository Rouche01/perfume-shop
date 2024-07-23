import React, { FC } from "react";
import { LineButton } from "@/components/shared";
import { Container, BannerSubtitle, BannerTitle, PriceInfo } from "./styles";

interface BannerProps {
  title: string;
  subtitle: string;
  priceInfo: string;
}

const Banner: FC<BannerProps> = ({ title, subtitle, priceInfo }) => {
  return (
    <>
      <Container>
        <BannerTitle>{title}</BannerTitle>
        <BannerSubtitle>{subtitle}</BannerSubtitle>
        <PriceInfo>
          Price from:{" "}
          <span
            style={{
              fontSize: "1.75rem",
              color: "#ab8e66",
              fontWeight: "600",
            }}
          >
            {priceInfo}
          </span>
        </PriceInfo>
        <LineButton>Shop Now</LineButton>
      </Container>
    </>
  );
};

export default Banner;
