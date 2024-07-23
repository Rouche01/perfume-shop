import { FC, useMemo, useState } from "react";
import {
  CartButtons,
  CartContainer,
  CartTotalAndCoupon,
  PriceSpan,
  TotalPriceLabel,
} from "./styles";
import CouponForm from "@/components/CouponForm";
import { RoundedButton, PageTitle } from "@/components/shared";
import { ProductEntity, ProductsQuery } from "@/graphql/generated/graphql";
import { useCart } from "@/hooks/cart";
import { useCurrencyContext } from "@/utils/currencyProvider";
import { useCurrencyConverter } from "@/hooks/currency";
import { ProductsInCart } from "@/types/cart";
import CartItem from "@/components/CartItem";

interface Props {
  products?: ProductsQuery["products"] | null;
}

const CartView: FC<Props> = ({ products }) => {
  const { cartState } = useCart();
  const [couponCode, setCouponCode] = useState<string>("");

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const productsInCart: ProductsInCart[] = useMemo(
    () =>
      Object.keys(cartState).map((sku) => {
        const product = products?.data.find(
          (product) => product.attributes?.sku === sku
        ) as ProductEntity;
        const { attributes, id } = product;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <>
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
    </>
  );
};

export default CartView;
