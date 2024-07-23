import { FC, useState } from "react";
import StarRating from "@/components/StarRating";
import { useCurrencyConverter } from "@/hooks/currency";
import { useCurrencyContext } from "@/utils/currencyProvider";
import CartQuantityInput from "@/components/CartQuantityInput";
import { RoundedButton } from "@/components/shared";
import { useCart } from "@/hooks/cart";

import {
  AddToCartSection,
  AddToWishlist,
  InventoryData,
  PriceInfo,
  PriceWrapper,
  ProductDesc,
  ProductMeta,
  ProductName,
  SalesPrice,
  WishlistIcon,
} from "../styles";

interface Props {
  name: string;
  averageRating: number;
  onSales: boolean;
  originalPrice: number;
  salesPrice?: number;
  shortDescription: string;
  sku: string;
}

const ProductMetadataPartial: FC<Props> = ({
  averageRating,
  name,
  onSales,
  originalPrice,
  shortDescription,
  salesPrice,
  sku,
}) => {
  const [productQty, setProductQty] = useState<number>(0);

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const { addToCart } = useCart();

  return (
    <ProductMeta>
      <ProductName>{name}</ProductName>
      <StarRating rating={averageRating} />
      <InventoryData>
        Availability: <span style={{ color: "#ab8e66" }}>In Stock</span>
      </InventoryData>
      <PriceWrapper>
        <PriceInfo salesExist={onSales}>{formatPrice(originalPrice)}</PriceInfo>
        {onSales && salesPrice && (
          <SalesPrice>{formatPrice(salesPrice)}</SalesPrice>
        )}
      </PriceWrapper>
      <ProductDesc>{shortDescription}</ProductDesc>
      <AddToCartSection>
        <CartQuantityInput
          quantity={productQty}
          setQuantity={setProductQty}
          rounded
          productSku={sku}
        />
        <RoundedButton
          onClick={() => addToCart(sku, productQty)}
          bgColor="#ab8e66"
        >
          Add to Cart
        </RoundedButton>
      </AddToCartSection>
      <AddToWishlist>
        <WishlistIcon />
        Add to Wishlist
      </AddToWishlist>
    </ProductMeta>
  );
};

export default ProductMetadataPartial;
