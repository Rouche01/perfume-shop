import React, { FC, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PageContainer } from "../src/generalStyles";
import {
  ProductInfoNavBarMenuList,
  ProductVariant,
} from "../src/types/product";
import StarRating from "../src/components/StarRating";
import { useCurrencyConverter } from "../src/hooks/currency";
import { useCurrencyContext } from "../src/utils/currencyProvider";
import CartQuantityInput from "../src/components/CartQuantityInput";
import { RoundedButton } from "../src/components/Button";
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
  Enum_Review_Rating,
  GetProductReviewsByProductIdDocument,
  ProductBySlugDocument,
  ProductBySlugQuery,
  ProductBySlugQueryVariables,
  ProductsDocument,
  ProductsQuery,
  ProductsQueryVariables,
  useCreateReviewMutation,
  useGetProductReviewsByProductIdQuery,
} from "../src/graphql/generated/graphql";
import { useAuth } from "../src/hooks/auth";
import { mapStarNumberToRating } from "../src/utils/constants";
import { getAuthDataFromLocal } from "../src/utils/auth";
import CustomerReviewList from "../src/components/CustomerReviewList";
import Spinner from "../src/components/Spinner";
import { useToastError } from "../src/hooks/error";
import { toast } from "react-toastify";

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
  max-height: 550px;
  object-fit: cover;
  object-position: top;
`;

const GalleryImage = styled.img<GalleryImageProps>`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  object-position: top;
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
  color: ${(props) => (props.active ? "#ab8e66" : "#bbb")};
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

const SpinnerContainer = styled.div`
  padding: 35px 0;
`;

const productInfoNavBarMenuList: ProductInfoNavBarMenuList[] = [
  { id: "additional-info", name: "Additional Information" },
  { id: "reviews", name: "Reviews" },
];

interface ProductPageProps {
  products?: ProductBySlugQuery["products"] | null;
}

const ProductPage: FC<ProductPageProps> = ({ products }) => {
  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant | null>();
  const [activeMenu, setActiveMenu] = useState<string>("additional-info");
  const [productQty, setProductQty] = useState<number>(0);

  const [rating, setRating] = useState<Enum_Review_Rating | null>();
  const [hoverRating, setHoverRating] = useState<number>(0);

  const [ratingInputErr, setRatingInputErr] = useState<string | undefined>();

  const { currencyInfo } = useCurrencyContext();
  const { formatPrice } = useCurrencyConverter(currencyInfo);

  const { addToCart } = useCart();
  const { authUser } = useAuth();
  const router = useRouter();

  const { validationSchema } = useCustomerReviewFormValidation();

  const productRating = useMemo(() => {
    const starRating = Object.keys(mapStarNumberToRating).find(
      (key) => mapStarNumberToRating[Number(key)] === rating
    );

    return Number(starRating);
  }, [rating]);

  const product = useMemo(() => {
    return products?.data[0];
  }, [products]);

  const productImages = useMemo(() => {
    const { otherImages, mainImage } = products?.data[0]?.attributes || {};
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
  }, [products]);

  useEffect(() => {
    setSelectedVariant(productImages[0]);
  }, [productImages]);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<CustomerReviewFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name:
        (authUser &&
          `${authUser?.user?.firstName} ${authUser?.user?.lastName}`) ||
        "",
      emailAddress: (authUser && authUser.user?.email) || "",
    },
  });

  const [createReview, { loading, error }] = useCreateReviewMutation({
    refetchQueries: [GetProductReviewsByProductIdDocument],
  });

  useToastError(error);

  const {
    loading: reviewsLoading,
    data: productReviewsResult,
    error: fetchReviewsErr,
  } = useGetProductReviewsByProductIdQuery({
    variables: { productId: product?.id },
  });

  const handleReviewSubmit = async (data: CustomerReviewFormValues) => {
    if (!rating) {
      setRatingInputErr("Product rating is required!");
      return;
    }

    if (!authUser?.user) {
      await router.push("/auth/login");
    }

    setRatingInputErr(undefined);
    const { emailAddress, reviewComment, name } = data;
    console.log({ productRating: rating, ...data });
    const authData = getAuthDataFromLocal();

    const review = {
      comment: reviewComment,
      email: emailAddress,
      name,
      rating,
      users_permissions_user: String(authData?.user?.id),
      product: String(product?.id),
    };

    setRating(null);

    try {
      await createReview({
        variables: {
          review,
        },
        context: {
          headers: {
            authorization: authData?.jwt ? `Bearer ${authData.jwt}` : "",
          },
        },
      });
    } catch (err) {}

    resetField("reviewComment");
  };

  const setProductRating = (stars: number) => {
    setRating(mapStarNumberToRating[stars]);
  };

  useEffect(() => {
    if (rating) {
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
          <ProductMainImage
            src={`http://localhost:1337${selectedVariant?.url}`}
          />
          <ProductImageGallery>
            {productImages.map((image) => (
              <GalleryImage
                key={image.url}
                onClick={() => {
                  setSelectedVariant(image);
                }}
                selected={image.url === selectedVariant?.url}
                src={`http://localhost:1337${image.url}`}
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
              <SalesPrice>
                {formatPrice(product?.attributes?.salesPrice as number)}
              </SalesPrice>
            )}
          </PriceWrapper>
          <ProductDesc>{product?.attributes?.shortDescription}</ProductDesc>
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
              {product?.attributes?.description}
            </AdditionalInfoTab>
          )}
          {activeMenu === "reviews" && (
            <div>
              {reviewsLoading ? (
                <SpinnerContainer>
                  <Spinner size={2.4} color="#ab8e66" />
                </SpinnerContainer>
              ) : (
                <>
                  <ReviewCount>
                    {productReviewsResult?.reviews?.meta.pagination.total || 0}{" "}
                    Review for {product?.attributes?.name}
                  </ReviewCount>
                  <CustomerReviewList
                    reviews={productReviewsResult?.reviews?.data || []}
                    fetchError={fetchReviewsErr?.message}
                  />
                  <CustomerReviewForm
                    registerFn={register}
                    handleLocalSubmit={handleSubmit}
                    onReviewSubmit={handleReviewSubmit}
                    formErrors={errors}
                    reviewRating={productRating}
                    reviewHoverRating={hoverRating}
                    setReviewRating={setProductRating}
                    setReviewHoverRating={setHoverRating}
                    starRatingError={ratingInputErr}
                    isSubmitting={loading}
                  />
                </>
              )}
            </div>
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

  return {
    props: { products: data.products },
  };
};
