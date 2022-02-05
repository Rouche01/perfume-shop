import React, { FC, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { PageContainer, PageTitle } from "../src/generalStyles";
import Dropdown from "../src/components/Dropdown";
import { SortOptions } from "../src/types/global";
import { products } from "../src/utils/dummyData";
import ProductBox from "../src/components/ProductBox";
import { useCurrencyContext } from "../src/utils/currencyProvider";
import { useCurrencyConverter } from "../src/hooks/currency";
import Pagination from "../src/components/Pagination";

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

const Shop: FC = () => {
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
        {products.map((val, idx) => (
          <ProductBox
            image={val.image}
            name={val.name}
            originalPrice={formatPrice(val.originalPrice)}
            rating={val.rating}
            salesExist={val.salesExist}
            salesPrice={formatPrice(val.salesPrice)}
            isNew={val.isNew}
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
