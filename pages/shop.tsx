import React, { FC } from "react";
import Head from "next/head";
import { PageContainer } from "@/components/shared";
import { GetStaticPropsResult } from "next";
import { client } from "@/services/apollo";
import ShopView from "@/views/ShopView";
import {
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
} from "@/graphql/generated/graphql";

interface ShopProps {
  products?: ProductsQuery["products"] | null;
}

const Shop: FC<ShopProps> = ({ products }) => {
  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | Shop Authentic Perfumes & Ouds</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShopView products={products} />
    </PageContainer>
  );
};

export default Shop;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<ShopProps>
> => {
  const { data } = await client().query<ProductsQuery, ProductsQueryVariables>({
    query: ProductsDocument,
  });

  return {
    props: { products: data?.products },
    revalidate: 60,
  };
};
