import React, { FC } from "react";
import Head from "next/head";
import { PageContainer } from "@/components/shared";
import { GetStaticPropsResult } from "next";
import {
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
} from "@/graphql/generated/graphql";
import { client } from "@/services/apollo";
import CartView from "@/views/CartView";

interface Props {
  products?: ProductsQuery["products"] | null;
}

const Cart: FC<Props> = ({ products }) => {
  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | Cart</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartView products={products} />
    </PageContainer>
  );
};

export default Cart;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const { data } = await client().query<ProductsQuery, ProductsQueryVariables>({
    query: ProductsDocument,
  });

  return {
    props: { products: data?.products },
    revalidate: 60,
  };
};
