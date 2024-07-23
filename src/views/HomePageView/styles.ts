import styled from "styled-components";

export const Slide = styled.div`
  background-color: #efefef;
  padding: 24px 32px;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
`;

export const SlideTextGroup = styled.div`
  width: 400px;
`;

export const SlideMajorTitle = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  font-weight: 600;
  color: #ab8e66;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const SlideSupportTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 2.375rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const SlidePriceInfo = styled.p`
  font-size: 1.125rem;
  color: #666666;
  font-weight: 500;
  letter-spacing: -0.05em;
  margin: 0;
  padding: 0;
`;

export const CategoryShowcase = styled.div`
  margin-top: 65px;
  margin-bottom: 60px;
`;

export const CategoryNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
`;

export const CategoryProducts = styled.div`
  margin-top: 60px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

export const SubFooter = styled.div`
  /* width: 100%; */
  background-color: #ab8e66;
  margin: 0 -1000px;
`;

export const SubFooterInner = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 120px;
  max-width: 1280px;
  margin: auto;
`;
