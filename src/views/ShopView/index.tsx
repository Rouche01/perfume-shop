import { PageTitle } from "@/components/shared";
import { FC, useState } from "react";
import { ProductList, SortBar } from "./styles";
import Dropdown from "@/components/Dropdown";
import { SortOptions } from "@/types/global";
import { useCurrencyContext } from "@/utils/currencyProvider";
import { useCurrencyConverter } from "@/hooks/currency";
import { useRecentlyViewed } from "@/hooks/recentlyViewed";
import { useRouter } from "next/router";
import { CustomProduct } from "@/types/product";
import Pagination from "@/components/Pagination";
import { ProductsQuery } from "@/graphql/generated/graphql";
import ProductBox from "@/components/ProductBox";

interface Props {
  products?: ProductsQuery["products"] | null;
}

const ShopView: FC<Props> = ({ products }) => {
  const [sortedBy, setSortedBy] = useState<SortOptions>(SortOptions.featured);
  const [perPage, setPerPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const { addProductToRecentlyViewed } = useRecentlyViewed();

  const router = useRouter();

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

  const onHandleProductClick = (product: CustomProduct) => {
    addProductToRecentlyViewed(product);
    router.push(`/${product.slug}`);
  };

  return (
    <>
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
          products.data.map((val) => {
            return (
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
                slug={val.attributes?.slug!}
                handleProductClick={() => onHandleProductClick(val.attributes!)}
              />
            );
          })}
      </ProductList>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={(page: string) => setCurrentPage(Number(page))}
      />
    </>
  );
};

export default ShopView;
