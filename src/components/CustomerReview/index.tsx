import React, { FC } from "react";
import StarRating from "@/components/StarRating";

import {
  Container,
  ReviewInfo,
  ReviewMeta,
  ReviewText,
  UserAvatar,
  UserNamePlusReviewDate,
} from "./styles";

interface CustomerReviewProps {
  userName: string;
  reviewDate: string;
  rating: number;
  reviewComment: string;
}

const CustomerReview: FC<CustomerReviewProps> = ({
  userName,
  reviewDate,
  rating,
  reviewComment,
}) => {
  return (
    <Container>
      <UserAvatar>account_circle</UserAvatar>
      <ReviewInfo>
        <ReviewMeta>
          <UserNamePlusReviewDate>
            <span style={{ fontWeight: "600" }}>{userName}</span> - {reviewDate}
          </UserNamePlusReviewDate>
          <StarRating rating={rating} />
        </ReviewMeta>
        <ReviewText>{reviewComment}</ReviewText>
      </ReviewInfo>
    </Container>
  );
};

export default CustomerReview;
