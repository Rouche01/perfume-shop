import React, { FC, useMemo, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { PageContainer, PageTitle } from "../src/generalStyles";
import CartItem from "../src/components/CartItem";
import { useCart } from "../src/hooks/cart";
import CouponForm from "../src/components/CouponForm";
import { ProductsInCart } from "../src/types/cart";
import { useCurrencyContext } from "../src/utils/currencyProvider";
import { useCurrencyConverter } from "../src/hooks/currency";
import { RoundedButton } from "../src/components/Button";
import { GetStaticPropsResult } from "next";
import { ProductEntity, ProductsDocument, ProductsQuery, ProductsQueryVariables } from "../src/graphql/generated/graphql";
import { client } from "../src/services/apollo";

const CartContainer = styled.div`
  width: 100%;
  border: 1px solid #f3f3f3;
  background-color: transparent;
  border-radius: 3px;
`;

const CartTotalAndCoupon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 30px;
`;

const TotalPriceLabel = styled.p`
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
`;

const PriceSpan = styled.span`
  font-size: 1.25rem;
`;

const CartButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 100px;
`;

interface CartProps {
  products?: ProductsQuery["products"] | null;
}

const Cart: FC<CartProps> = ({ products }) => {
  const { cartState } = useCart();
  const [couponCode, setCouponCode] = useState<string>("");

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const productsInCart: ProductsInCart[] = useMemo(
    () =>
      Object.keys(cartState).map((sku) => {
        const product = (products?.data.find((product) => product.attributes?.sku === sku)) as ProductEntity;
        const { attributes, id  } = product
        return {
          name: attributes?.name,
          cumulativePrice: attributes?.onSales
            ? cartState[sku] * Number(attributes?.salesPrice)
            : cartState[sku] * Number(attributes?.originalPrice),
          quantity: cartState[sku],
          image: attributes?.mainImage.data?.attributes?.url,
          sku,
        };
      }),
    [cartState]
  );

  const totalPrice = useMemo(
    () =>
      productsInCart
        .map((product) => product.cumulativePrice)
        .reduce((prev, curr) => curr + prev, 0),
    [productsInCart]
  );

  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | About us</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle>Shopping Cart</PageTitle>
      <CartContainer>
        {productsInCart.map(
          ({ name, cumulativePrice, quantity, image, sku }) => (
            <CartItem
              key={sku}
              sku={sku}
              name={name!}
              cumulativePrice={cumulativePrice}
              quantity={quantity}
              image={image!}
            />
          )
        )}
        <CartTotalAndCoupon>
          <CouponForm couponCode={couponCode} setCouponCode={setCouponCode} />
          <TotalPriceLabel>
            Total Price: <PriceSpan>{formatPrice(totalPrice)}</PriceSpan>
          </TotalPriceLabel>
        </CartTotalAndCoupon>
      </CartContainer>
      <CartButtons>
        <RoundedButton
          bgColor="transparent"
          color="#333"
          hoverBgColor="#ab8e66"
          hoverColor="#fff"
          borderColor="#e9e9e9"
          size="small"
        >
          Continue Shopping
        </RoundedButton>
        <RoundedButton
          bgColor="transparent"
          color="#333"
          hoverBgColor="#ab8e66"
          hoverColor="#fff"
          borderColor="#e9e9e9"
          size="small"
        >
          Checkout
        </RoundedButton>
      </CartButtons>
    </PageContainer>
  );
};

export default Cart;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<CartProps>
> => {
  const { data } = await client().query<ProductsQuery, ProductsQueryVariables>({
    query: ProductsDocument,
  });

  return {
    props: { products: data?.products },
    revalidate: 60,
  };
};
