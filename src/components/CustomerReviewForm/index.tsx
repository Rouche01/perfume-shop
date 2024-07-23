import React, { FC } from "react";
import { UseFormHandleSubmit } from "react-hook-form";
import {
  ContactFormValues,
  CustomerReviewFormErrors,
  CustomerReviewFormValues,
  LoginFormvalues,
  RegisterFn,
  RegisterFormValues,
} from "@/types/global";
import { RoundedButton, FormRow } from "@/components/shared";
import InputField from "@/components/InputField";
import Spinner from "@/components/Spinner";
import StarRatingInput from "@/components/StarRatingInput";
import TextAreaInput from "@/components/TextArea";

import { Container, Subtitle, Title } from "./styles";

interface CustomerReviewFormProps {
  registerFn: RegisterFn<
    | ContactFormValues
    | CustomerReviewFormValues
    | LoginFormvalues
    | RegisterFormValues
  >;
  handleLocalSubmit: UseFormHandleSubmit<CustomerReviewFormValues>;
  onReviewSubmit: (data: CustomerReviewFormValues) => void;
  formErrors: CustomerReviewFormErrors;
  reviewRating: number;
  reviewHoverRating: number;
  setReviewRating: (stars: number) => void;
  setReviewHoverRating: React.Dispatch<React.SetStateAction<number>>;
  starRatingError?: string;
  isSubmitting: boolean;
}

const CustomerReviewForm: FC<CustomerReviewFormProps> = ({
  registerFn,
  handleLocalSubmit,
  onReviewSubmit,
  formErrors,
  reviewHoverRating,
  reviewRating,
  setReviewHoverRating,
  setReviewRating,
  starRatingError,
  isSubmitting,
}) => {
  return (
    <Container>
      <Title>Add a Review</Title>
      <Subtitle>
        Your email address will not be published. Required fields are marked *
      </Subtitle>
      <form onSubmit={handleLocalSubmit(onReviewSubmit)}>
        <StarRatingInput
          rating={reviewRating}
          hoverRating={reviewHoverRating}
          setHoverRating={setReviewHoverRating}
          setRating={setReviewRating}
          error={starRatingError}
        />
        <FormRow columns={1} mt={10}>
          <TextAreaInput
            label="Your review *"
            labelSize={1}
            labelColor="#666"
            name="reviewComment"
            registerFn={registerFn}
            errorText={formErrors.reviewComment?.message}
          />
        </FormRow>
        <FormRow columns={1} mt={22}>
          <InputField
            label="Name *"
            labelColor="#666"
            labelSize={1}
            name="name"
            registerFn={registerFn}
            type="text"
            errorText={formErrors.name?.message}
          />
        </FormRow>
        <FormRow columns={1} mt={22}>
          <InputField
            label="Email *"
            labelColor="#666"
            labelSize={1}
            name="emailAddress"
            registerFn={registerFn}
            type="text"
            errorText={formErrors.emailAddress?.message}
          />
        </FormRow>
        <div style={{ marginTop: "28px" }}>
          <RoundedButton bgColor="#ab8e66" type="submit">
            {isSubmitting ? <Spinner size={1.1} /> : "Submit"}
          </RoundedButton>
        </div>
      </form>
    </Container>
  );
};

export default CustomerReviewForm;
