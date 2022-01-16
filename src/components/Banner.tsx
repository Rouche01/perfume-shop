import React, { FC } from "react";
import styled from "styled-components";
import { LineButton } from "./Button";

const Container = styled.div`
  width: 100%;
  background-image: url("/banner-home-1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 48px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 65px;
`;

const BannerTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: Jost;
  font-weight: 500;
  font-size: 2.125rem;
`;

const BannerSubtitle = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  max-width: 300px;
  margin-top: 10px;
  color: #666;
`;

const PriceInfo = styled.p`
  font-size: 1.125rem;
  color: #666666;
  font-weight: 500;
  letter-spacing: -0.05em;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`;

interface BannerProps {
  title: string;
  subtitle: string;
  priceInfo: number;
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
            {Number(priceInfo).toLocaleString("en-NG", {
              currency: "NGN",
              style: "currency",
            })}
          </span>
        </PriceInfo>
        <LineButton>Shop Now</LineButton>
      </Container>
    </>
  );
};

export default Banner;
