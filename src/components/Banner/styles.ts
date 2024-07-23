import styled from "styled-components";

export const Container = styled.div`
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

export const BannerTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: Jost;
  font-weight: 500;
  font-size: 2.125rem;
`;

export const BannerSubtitle = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  max-width: 300px;
  margin-top: 10px;
  color: #666;
`;

export const PriceInfo = styled.p`
  font-size: 1.125rem;
  color: #666666;
  font-weight: 500;
  letter-spacing: -0.05em;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`;
