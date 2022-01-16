import React, { FC } from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../types/product";

interface OriginalPriceProps {
  salesExist?: boolean;
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f1f1;
  &:hover {
    border: 1px solid #ab8e66;
  }
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ProductInfo = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1rem 0;
`;

const ProductName = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.125rem;
  font-weight: 500;
  color: #ab8e66;
  text-align: center;
  cursor: pointer;
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`;

const RateStar = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  color: #ffb933;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 7px;
`;

const OriginalPrice = styled.p<OriginalPriceProps>`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => (props.salesExist ? "#aaa" : "#000")};
  text-decoration: ${(props) => (props.salesExist ? "line-through" : "none")};
`;

const SalesPrice = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: #000;
`;

const NewTag = styled.div`
  background-color: #ab8e66;
  position: absolute;
  color: #fff;
  font-size: 0.75rem;
  padding: 2px 12px;
  border-radius: 16px;
  top: 8px;
  left: 8px;
`;

interface ProductBoxProps {}

const ProductBox: FC<Product & ProductBoxProps> = ({
  name,
  image,
  isNew,
  originalPrice,
  rating,
  salesExist,
  salesPrice,
}) => {
  return (
    <>
      <ProductWrapper>
        <ProductImage src={image} />
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <StarRating>
            {Array.from({ length: 5 }, (_, i) =>
              i < rating ? "fill" : "outline"
            ).map((val, idx) =>
              val === "fill" ? (
                <RateStar key={`${val}-${idx}`} component={<AiFillStar />} />
              ) : (
                <RateStar key={`${val}-${idx}`} component={<AiOutlineStar />} />
              )
            )}
          </StarRating>
          <PriceWrapper>
            <OriginalPrice salesExist={salesExist}>
              {Number(originalPrice).toLocaleString("en-NG", {
                currency: "NGN",
                style: "currency",
              })}
            </OriginalPrice>
            {salesExist && (
              <SalesPrice>
                {Number(salesPrice).toLocaleString("en-NG", {
                  currency: "NGN",
                  style: "currency",
                })}
              </SalesPrice>
            )}
          </PriceWrapper>
        </ProductInfo>
        {isNew && <NewTag>New</NewTag>}
      </ProductWrapper>
    </>
  );
};

export default ProductBox;
