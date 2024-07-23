import { FC, useEffect, useMemo, useState } from "react";
import {
  AdditionalInfoTab,
  NavbarContent,
  ReviewCount,
  SpinnerContainer,
} from "../styles";
import Spinner from "@/components/Spinner";
import QueryError from "@/components/QueryError";
import CustomerReviewList from "@/components/CustomerReviewList";
import {
  Enum_Review_Rating,
  GetProductReviewsByProductIdDocument,
  useCreateReviewMutation,
  useGetProductReviewsByProductIdQuery,
} from "@/graphql/generated/graphql";
import CustomerReviewForm from "@/components/CustomerReviewForm";
import { useForm } from "react-hook-form";
import { CustomerReviewFormValues } from "@/types/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCustomerReviewFormValidation } from "@/hooks/validationSchema";
import { useAuth } from "@/hooks/auth";
import { mapStarNumberToRating } from "@/utils/constants";
import { useRouter } from "next/router";
import { getAuthDataFromLocal } from "@/utils/auth";
import { toast } from "react-toastify";
import { useCreateReview } from "@/hooks/mutations";

interface Props {
  activeMenu: string;
  productDescription?: string;
  productName: string;
  productId: string;
  productSlug: string;
}

const ProductInfoNavContentPartial: FC<Props> = ({
  activeMenu,
  productDescription,
  productName,
  productId,
  productSlug,
}) => {
  const router = useRouter();

  const [rating, setRating] = useState<Enum_Review_Rating | null>();
  const [hoverRating, setHoverRating] = useState<number>(0);

  const [ratingInputErr, setRatingInputErr] = useState<string | undefined>();

  useEffect(() => {
    if (rating) {
      setRatingInputErr(undefined);
    }
  }, [rating]);

  const productRating = useMemo(() => {
    if (!rating) {
      return 0;
    }
    const starRating = Object.keys(mapStarNumberToRating).find(
      (key) => mapStarNumberToRating[Number(key)] === rating
    );

    return Number(starRating);
  }, [rating]);

  const setProductRating = (stars: number) => {
    setRating(mapStarNumberToRating[stars]);
  };

  const { authUser } = useAuth();
  const { validationSchema } = useCustomerReviewFormValidation();

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

  const { createReview, isCreatingReview } = useCreateReview({
    onReviewCreated: () => resetField("reviewComment"),
  });

  const handleReviewSubmit = async (data: CustomerReviewFormValues) => {
    if (!rating) {
      setRatingInputErr("Product rating is required!");
      return;
    }

    if (!authUser?.user) {
      await router.push(
        {
          pathname: "/auth/login",
          query: { from: `/${productSlug}` },
        },
        "/auth/login"
      );
    }

    setRatingInputErr(undefined);
    const { emailAddress, reviewComment, name } = data;
    const authData = getAuthDataFromLocal();

    const review = {
      comment: reviewComment,
      email: emailAddress,
      name,
      rating,
      users_permissions_user: String(authData?.user?.id),
      product: productId,
    };

    setRating(null);
    setHoverRating(0);

    await createReview({
      variables: {
        review,
      },
    });
  };

  const {
    loading: isLoadingReviews,
    data: productReviewsData,
    error: fetchReviewsErr,
  } = useGetProductReviewsByProductIdQuery({
    variables: { productId },
  });

  return (
    <NavbarContent>
      {activeMenu === "additional-info" && (
        <AdditionalInfoTab>{productDescription}</AdditionalInfoTab>
      )}
      {activeMenu === "reviews" && (
        <div>
          {isLoadingReviews ? (
            <SpinnerContainer>
              <Spinner size={2.4} color="#ab8e66" />
            </SpinnerContainer>
          ) : (
            <>
              {fetchReviewsErr ? (
                <QueryError resourceName="reviews" />
              ) : (
                <>
                  <ReviewCount>
                    {productReviewsData?.reviews?.meta.pagination.total || 0}{" "}
                    Review for {productName}
                  </ReviewCount>
                  <CustomerReviewList
                    reviews={productReviewsData?.reviews?.data || []}
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
                    isSubmitting={isCreatingReview}
                  />
                </>
              )}
            </>
          )}
        </div>
      )}
    </NavbarContent>
  );
};

export default ProductInfoNavContentPartial;
