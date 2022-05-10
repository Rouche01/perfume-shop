import React, { FC, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { PageContainer, PageTitle } from "../src/generalStyles";
import Dropdown from "../src/components/Dropdown";
import { SortOptions } from "../src/types/global";
import ProductBox from "../src/components/ProductBox";
import { useCurrencyContext } from "../src/utils/currencyProvider";
import { useCurrencyConverter } from "../src/hooks/currency";
import Pagination from "../src/components/Pagination";
import { GetStaticPropsResult } from "next";
import {
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
} from "../src/graphql/generated/graphql";
import { client } from "../src/services/apollo";

const SortBar = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  padding: 24px 20px;
  color: #888;
  margin-bottom: 35px;
  display: flex;
  gap: 60px;
`;

const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
`;

interface ShopProps {
  products?: ProductsQuery["products"] | null;
}

const Shop: FC<ShopProps> = ({ products }) => {
  const [sortedBy, setSortedBy] = useState<SortOptions>(SortOptions.featured);
  const [perPage, setPerPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const handleSetSortedBy = (value: string) => {
    const newVal = Object.entries(SortOptions).find(
      ([_key, val]) => val === value
    )?.[0];
    // @ts-ignore
    setSortedBy(SortOptions[newVal]);
  };

  const handleSetPerPage = (value: string) => {
    const [first] = value.split(" ");
    setPerPage(Number(first));
  };

  return (
    <PageContainer>
      <Head>
        <title>Peace Luxury | Shop Authentic Perfumes & Ouds</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle>All Products</PageTitle>
      <SortBar>
        <Dropdown
          inputOptions={Object.values(SortOptions)}
          inputValue={sortedBy}
          label="Sort by"
          setInputValue={handleSetSortedBy}
        />
        <Dropdown
          inputOptions={[8, 12, 16, 20].map((val) => `${val} Products/Page`)}
          inputValue={`${perPage} Products/Page`}
          label="Show"
          setInputValue={handleSetPerPage}
        />
      </SortBar>
      <ProductList>
        {products?.data &&
          products.data.map((val) => (
            <ProductBox
              key={val.attributes?.sku}
              image={val.attributes?.mainImage.data?.attributes?.url}
              sku={val.attributes?.sku}
              name={val.attributes?.name}
              originalPrice={formatPrice(
                val.attributes?.originalPrice as number
              )}
              rating={4}
              salesExist={val.attributes?.onSales}
              salesPrice={formatPrice(val.attributes?.salesPrice as number)}
              isNew={true}
            />
          ))}
      </ProductList>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={(page: string) => setCurrentPage(Number(page))}
      />
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
  };
};
