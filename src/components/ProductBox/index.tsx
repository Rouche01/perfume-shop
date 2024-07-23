import React, { FC } from "react";
import config from "@/configs";
import StarRating from "@/components/StarRating";

import {
  ProductWrapper,
  NewTag,
  OriginalPrice,
  PriceWrapper,
  ProductImage,
  ProductInfo,
  ProductName,
  RatingContainer,
  SalesPrice,
} from "./styles";

interface ProductBoxProps {
  name?: string;
  rating: number;
  image?: string;
  isNew: boolean;
  originalPrice: string;
  salesExist?: boolean;
  salesPrice: string;
  sku?: string | null;
  slug: string;
  handleProductClick: (slug: string) => void;
}

const ProductBox: FC<ProductBoxProps> = ({
  name,
  image,
  isNew,
  originalPrice,
  rating,
  salesExist,
  salesPrice,
  slug,
  handleProductClick,
}) => {
  return (
    <>
      <ProductWrapper onClick={(_ev) => handleProductClick(slug)}>
        <ProductImage src={`${config.strapiServerUrl}${image}`} />
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <RatingContainer>
            <StarRating rating={rating} />
          </RatingContainer>
          <PriceWrapper>
            <OriginalPrice salesExist={salesExist}>
              {originalPrice}
            </OriginalPrice>
            {salesExist && <SalesPrice>{salesPrice}</SalesPrice>}
          </PriceWrapper>
        </ProductInfo>
        {isNew && <NewTag>New</NewTag>}
      </ProductWrapper>
    </>
  );
};

export default ProductBox;
