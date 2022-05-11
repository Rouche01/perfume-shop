import React, { FC, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { PageContainer } from "../src/generalStyles";
import { productPageImages, products } from "../src/utils/dummyData";
import {
  ProductInfoNavBarMenuList,
  ProductVariant,
} from "../src/types/product";
import StarRating from "../src/components/StarRating";
import { useCurrencyConverter } from "../src/hooks/currency";
import { useCurrencyContext } from "../src/utils/currencyProvider";
import CartQuantityInput from "../src/components/CartQuantityInput";
import { RoundedButton } from "../src/components/Button";
import CustomerReview from "../src/components/CustomerReview";
import CustomerReviewForm from "../src/components/CustomerReviewForm";
import { useCustomerReviewFormValidation } from "../src/hooks/validationSchema";
import { useForm } from "react-hook-form";
import { CustomerReviewFormValues } from "../src/types/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCart } from "../src/hooks/cart";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { client } from "../src/services/apollo";
import {
  ProductBySlugDocument,
  ProductBySlugQuery,
  ProductBySlugQueryVariables,
  ProductEntity,
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
} from "../src/graphql/generated/graphql";

type GalleryImageProps = {
  selected: boolean;
};

type PriceInfoProps = {
  salesExist?: boolean;
};

type InfoNavBarItemProps = {
  active?: boolean;
};

type PageParams = {
  slug: string;
};

type Path = {
  params: PageParams;
  locale?: string;
};

const ProductRootContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const ProductGallery = styled.div`
  width: 100%;
  padding-right: 70px;
`;

const ProductImageGallery = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

const ProductMainImage = styled.img`
  width: 100%;
`;

const GalleryImage = styled.img<GalleryImageProps>`
  width: 100%;
  cursor: pointer;
  border: 1px solid ${(props) => (props.selected ? "#ab8e66" : "#eee")};
`;

const ProductMeta = styled.div`
  width: 100%;
`;

const ProductName = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.65rem;
  margin-bottom: 14px;
  color: #333;
  font-weight: 500;
`;

const InventoryData = styled.p`
  margin: 0;
  padding: 0;
  color: #555;
  margin-top: 14px;
  font-size: 0.9rem;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 14px;
`;

const PriceInfo = styled.h3<PriceInfoProps>`
  margin: 0;
  padding: 0;
  color: ${(props) => (props.salesExist ? "#aaa" : "#333")};
  text-decoration: ${(props) => (props.salesExist ? "line-through" : "none")};
  font-size: 1.4rem;
  font-weight: 500;
`;

const SalesPrice = styled.h3`
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 1.4rem;
  font-weight: 500;
`;

const ProductDesc = styled.p`
  color: #555;
  font-size: 1rem;
  margin-top: 15px;
`;

const AddToCartSection = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 20px;
`;

const AddToWishlist = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
  color: #555;
  font-size: 0.95rem;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #ab8e66;
  }
`;

const WishlistIcon = styled.span.attrs({
  className: "material-icons material-icons-outlined md-24",
})`
  color: #ccc;
  &:after {
    font-family: "Material Icons";
    content: "favorite_border";
  }
  ${AddToWishlist}:hover & {
    color: #ab8e66;
    &:after {
      font-family: "Material Icons";
      content: "favorite";
    }
  }
`;

const ProductInfoAndReview = styled.div`
  margin-top: 60px;
`;

const InfoNavBar = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  padding-inline-start: 0;
  border-bottom: 1px solid #e6e6e6;
`;

const InfoNavBarItem = styled.li<InfoNavBarItemProps>`
  color: #bbb;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  padding: 8px 0;
  border-bottom: 3px solid;
  border-color: ${(props) => (props.active ? "#ab8e66" : "transparent")};
`;

const NavbarContent = styled.div`
  padding: 8px 0 120px;
`;

const AdditionalInfoTab = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ReviewCount = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 20px 0;
`;

const productVariants = productPageImages.slice(0, 3);

const productInfoNavBarMenuList: ProductInfoNavBarMenuList[] = [
  { id: "additional-info", name: "Additional Information" },
  { id: "reviews", name: "Reviews" },
];

interface ProductPageProps {
  products?: ProductsQuery["products"] | null;
}

const ProductPage: FC<ProductPageProps> = ({ products }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    productVariants[0]
  );
  const [activeMenu, setActiveMenu] = useState<string>("additional-info");
  const [productQty, setProductQty] = useState<number>(0);

  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const [ratingInputErr, setRatingInputErr] = useState<string | undefined>();

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const { addToCart } = useCart();

  const { validationSchema } = useCustomerReviewFormValidation();

  const product = useMemo(() => {
    return products?.data[0]
  }, [products])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerReviewFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const handleReviewSubmit = (data: CustomerReviewFormValues) => {
    if (rating < 1) {
      setRatingInputErr("Product rating is required!");
      return;
    }

    setRatingInputErr(undefined);
    console.log({ productRating: rating, ...data });
  };

  useEffect(() => {
    if (rating > 0) {
      setRatingInputErr(undefined);
    }
  }, [rating]);

  return (
    <PageContainer>
      <Head>
        <title>Aoud Queen Roses: Peace Luxury</title>
        <meta name="description" content="Authentic Perfumes & Ouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductRootContainer>
        <ProductGallery>
          <ProductMainImage src={selectedVariant.imageUrl} />
          <ProductImageGallery>
            {productVariants.map((variant) => (
              <GalleryImage
                onClick={() => {
                  setSelectedVariant(variant);
                }}
                selected={variant.imageUrl === selectedVariant.imageUrl}
                key={variant.name}
                src={variant.imageUrl}
              />
            ))}
          </ProductImageGallery>
        </ProductGallery>
        <ProductMeta>
          <ProductName>{product?.attributes?.name}</ProductName>
          <StarRating rating={3} />
          <InventoryData>
            Availability: <span style={{ color: "#ab8e66" }}>In Stock</span>
          </InventoryData>
          <PriceWrapper>
            <PriceInfo salesExist={product?.attributes?.onSales}>
              {formatPrice(product?.attributes?.originalPrice as number)}
            </PriceInfo>
            {product?.attributes?.onSales && (
              <SalesPrice>{formatPrice(product?.attributes?.salesPrice as number)}</SalesPrice>
            )}
          </PriceWrapper>
          <ProductDesc>
            After getting your products delivered, you will be able to rate and
            review them. Your feedback will be published on the product page to
            help all Jumia users get the best shopping experience!
          </ProductDesc>
          <AddToCartSection>
            <CartQuantityInput
              quantity={productQty}
              setQuantity={setProductQty}
              rounded
              productSku={product?.attributes?.sku!}
            />
            <RoundedButton
              onClick={() => addToCart(product?.attributes?.sku!, productQty)}
              bgColor="#ab8e66"
            >
              Add to Cart
            </RoundedButton>
          </AddToCartSection>
          <AddToWishlist>
            <WishlistIcon />
            Add to Wishlist
          </AddToWishlist>
        </ProductMeta>
      </ProductRootContainer>
      <ProductInfoAndReview>
        <InfoNavBar>
          {productInfoNavBarMenuList.map(({ id, name }) => (
            <InfoNavBarItem
              onClick={() => setActiveMenu(id)}
              key={id}
              active={activeMenu === id}
            >
              {name}
            </InfoNavBarItem>
          ))}
        </InfoNavBar>
        <NavbarContent>
          {activeMenu === "additional-info" && (
            <AdditionalInfoTab>
              Quisque quis ipsum venenatis, fermentum ante volutpat, ornare
              enim. Phasellus molestie risus non aliquet cursus. Integer
              vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante
              ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor
              elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus
              sed laoreet velit. Proin fringilla urna vel mattis euismod. Etiam
              sodales, massa non tincidunt iaculis, mauris libero scelerisque
              justo, ut rutrum lectus urna sit amet quam. Nulla maximus
              vestibulum mi vitae accumsan.
            </AdditionalInfoTab>
          )}
          {activeMenu === "reviews" && (
            <>
              <ReviewCount>1 Review for {product?.attributes?.name}</ReviewCount>
              <CustomerReview
                userName="Cobus Bester"
                reviewDate="June 7, 2013"
                rating={4}
                reviewComment="Simple and effective design. One of my favorites."
              />
              <CustomerReviewForm
                registerFn={register}
                handleLocalSubmit={handleSubmit}
                onReviewSubmit={handleReviewSubmit}
                formErrors={errors}
                reviewRating={rating}
                reviewHoverRating={hoverRating}
                setReviewRating={setRating}
                setReviewHoverRating={setHoverRating}
                starRatingError={ratingInputErr}
              />
            </>
          )}
        </NavbarContent>
      </ProductInfoAndReview>
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
    fallback: false,
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

  return {
    props: { products: data.products },
  };
};
