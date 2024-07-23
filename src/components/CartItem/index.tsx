import React, { FC } from "react";
import { useCart } from "@/hooks/cart";
import config from "@/configs";
import { useCurrencyConverter } from "@/hooks/currency";
import { useCurrencyContext } from "@/utils/currencyProvider";
import CartQuantityInput from "@/components/CartQuantityInput";

import {
  Container,
  ProductDesc,
  ProductImage,
  ProductMeta,
  ProductName,
  ProductPrice,
  RemoveItem,
  RemoveItemIcon,
} from "./styles";

interface CartItemProps {
  sku: string;
  name: string;
  cumulativePrice: number;
  quantity: number;
  image: string;
}

const CartItem: FC<CartItemProps> = ({
  sku,
  name,
  cumulativePrice,
  quantity,
  image,
}) => {
  const {
    incrementProductInCart,
    decrementProductInCart,
    removeProductFromCart,
  } = useCart();

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  return (
    <Container>
      <ProductImage src={`${config.strapiServerUrl}${image}`} alt="product" />
      <ProductMeta>
        <ProductName>{name}</ProductName>
        <ProductDesc>Eau de Parfum for women 100 ml</ProductDesc>
      </ProductMeta>
      <div>
        <CartQuantityInput
          onAdd={incrementProductInCart}
          onRemove={decrementProductInCart}
          quantity={quantity}
          productSku={sku}
        />
      </div>
      <ProductPrice>{formatPrice(cumulativePrice)}</ProductPrice>
      <RemoveItem onClick={(_ev) => removeProductFromCart(sku)}>
        <RemoveItemIcon />
      </RemoveItem>
    </Container>
  );
};

export default CartItem;
