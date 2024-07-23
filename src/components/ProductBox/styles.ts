import styled from "styled-components";

interface OriginalPriceProps {
  salesExist?: boolean;
}

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f1f1;
  &:hover {
    border: 1px solid #ab8e66;
  }
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1rem 0;
`;

export const ProductName = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.125rem;
  font-weight: 500;
  color: #ab8e66;
  text-align: center;
  cursor: pointer;
`;

export const RatingContainer = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 7px;
`;

export const OriginalPrice = styled.p<OriginalPriceProps>`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => (props.salesExist ? "#aaa" : "#000")};
  text-decoration: ${(props) => (props.salesExist ? "line-through" : "none")};
`;

export const SalesPrice = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: #000;
`;

export const NewTag = styled.div`
  background-color: #ab8e66;
  position: absolute;
  color: #fff;
  font-size: 0.75rem;
  padding: 2px 12px;
  border-radius: 16px;
  top: 8px;
  left: 8px;
`;
