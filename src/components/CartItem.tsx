import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useCart } from "../hooks/cart";
import { useCurrencyConverter } from "../hooks/currency";
import { useCurrencyContext } from "../utils/currencyProvider";
import CartQuantityInput from "./CartQuantityInput";

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #f3f3f3;
  padding: 30px;
  display: grid;
  grid-template-columns: 0.75fr 2fr 1fr 1fr 0.25fr;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
`;

const ProductMeta = styled.div``;

const ProductName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: #333;
`;

const ProductDesc = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #888;
`;

const ProductPrice = styled.h4`
  margin: 0;
  padding: 0;
  color: #111;
  font-size: 1.25rem;
  font-weight: 500;
`;

const RemoveItem = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: #aaa;
  &:hover {
    color: #ab8e66;
  }
`;

const RemoveItemIcon = styled.span.attrs({
  className: "material-icons material-icons-outlined md-24",
})`
  &:after {
    font-family: "Material Icons";
    content: "delete_outline";
  }
`;

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
      <ProductImage src={`http://localhost:1337${image}`} alt="product" />
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
