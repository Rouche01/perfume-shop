import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  background-image: url("./banner-image.jpg");
  background-size: cover;
  background-repeat: none;
  height: 350px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

export const BannerInfo = styled.div`
  width: 100%;
  padding: 0 35px;
`;

export const LineBreaker = styled.span`
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid #eee;
  margin-top: 0px;
`;

export const BannerTitle = styled.h2`
  color: #000;
  font-size: 2.125rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
`;

export const BannerText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: #666;
  margin-top: 20px;
`;

export const FeatureContainer = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 120px;
  max-width: 1280px;
  margin: auto;
`;

export const Pitch = styled.div`
  width: 100%;
  margin: 50px 0 80px;
`;

export const PitchHeader = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const PitchBody = styled.p`
  padding: 0;
  text-align: center;
  color: #666;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
`;
