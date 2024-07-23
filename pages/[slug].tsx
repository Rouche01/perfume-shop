import React, { FC, useMemo } from "react";
import Head from "next/head";
import { PageContainer } from "@/components/shared";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { client } from "@/services/apollo";
import {
  GetProductAverageRatingDocument,
  GetProductAverageRatingQuery,
  GetProductReviewsByProductIdQueryVariables,
  Product,
  ProductBySlugDocument,
  ProductBySlugQuery,
  ProductBySlugQueryVariables,
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
} from "@/graphql/generated/graphql";
import ProductPageView from "@/views/ProductPageView";

type PageParams = {
  slug: string;
};

type Path = {
  params: PageParams;
  locale?: string;
};

interface ProductPageProps {
  products?: ProductBySlugQuery["products"] | null;
  productAverageRating?: number | null;
}

const ProductPage: FC<ProductPageProps> = ({
  products,
  productAverageRating,
}) => {
  const product = useMemo(() => {
    return products?.data[0];
  }, [products]);

  return (
    <PageContainer>
      <Head>
        <title>Product page: Peace Luxury</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductPageView
        product={product?.attributes as Product}
        productId={product?.id as string}
        productAverageRating={productAverageRating}
      />
    </PageContainer>
  );
};

export default ProductPage;

export const getStaticPaths = async (): Promise<
  GetStaticPathsResult<PageParams>
> => {
  const {
    data: { products },
  } = await client().query<ProductsQuery, ProductsQueryVariables>({
    query: ProductsDocument,
  });

  const paths = products?.data.map((product) => ({
    params: { slug: product.attributes?.slug as string },
  })) as Path[];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<PageParams>): Promise<
  GetStaticPropsResult<ProductPageProps>
> => {
  const { data } = await client().query<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >({ query: ProductBySlugDocument, variables: { slug: params?.slug } });

  const { data: productAvgRatingResponse } = await client().query<
    GetProductAverageRatingQuery,
    GetProductReviewsByProductIdQueryVariables
  >({
    query: GetProductAverageRatingDocument,
    variables: { productId: data.products?.data[0].id },
  });

  return {
    props: {
      products: data.products,
      productAverageRating:
        productAvgRatingResponse.averageProductRating?.averageRating,
    },
  };
};
