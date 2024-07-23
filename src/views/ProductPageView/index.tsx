import { FC, useMemo, useState } from "react";
import { Product } from "@/graphql/generated/graphql";
import { ProductInfoNavBarMenuList } from "@/types/product";

import { ProductInfoAndReview, ProductRootContainer } from "./styles";
import {
  ProductInfoNavContentPartial,
  ProductGalleryPartial,
  ProductInfoNavPartial,
  ProductMetadataPartial,
} from "./partials";

const productInfoNavBarMenuList: ProductInfoNavBarMenuList[] = [
  { id: "additional-info", name: "Additional Information" },
  { id: "reviews", name: "Reviews" },
];

interface Props {
  product: Product;
  productId: string;
  productAverageRating?: number | null;
}

const ProductPageView: FC<Props> = ({
  productAverageRating,
  product,
  productId,
}) => {
  const [activeMenu, setActiveMenu] = useState<string>("additional-info");

  const productImages = useMemo(() => {
    const { otherImages, mainImage } = product;
    const productVariants = otherImages
      ? otherImages.data.map((image) => ({
          url: image.attributes?.url,
          formats: image.attributes?.formats,
        }))
      : [];
    return [
      {
        url: mainImage?.data?.attributes?.url,
        formats: mainImage?.data?.attributes?.formats,
      },
      ...(productVariants as []),
    ].slice(0, 3);
  }, [product]);

  return (
    <>
      <ProductRootContainer>
        <ProductGalleryPartial productImages={productImages} />
        <ProductMetadataPartial
          averageRating={productAverageRating || 0}
          name={product.name}
          onSales={product.onSales}
          originalPrice={product.originalPrice}
          shortDescription={product.shortDescription}
          sku={product.sku!}
          salesPrice={product?.salesPrice || undefined}
        />
      </ProductRootContainer>
      <ProductInfoAndReview>
        <ProductInfoNavPartial
          menuList={productInfoNavBarMenuList}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
        <ProductInfoNavContentPartial
          activeMenu={activeMenu}
          productDescription={product.description || undefined}
          productId={productId}
          productName={product.name}
          productSlug={product.slug}
        />
      </ProductInfoAndReview>
    </>
  );
};

export default ProductPageView;
