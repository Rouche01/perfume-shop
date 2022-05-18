import React, { FC } from "react";
import styled from "styled-components";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { Enum_Review_Rating, ReviewEntity } from "../graphql/generated/graphql";
import { mapStarNumberToRating } from "../utils/constants";
import CustomerReview from "./CustomerReview";

const NoReviewMessage = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
`;

interface CustomerReviewListProps {
  fetchError?: string;
  reviews: ReviewEntity[];
}

const CustomerReviewList: FC<CustomerReviewListProps> = ({ reviews }) => {
  return (
    <>
      {reviews.length > 0 &&
        reviews.map((review) => {
          const ratingEnumKey = Object.entries(Enum_Review_Rating).find(
            ([_key, val]) => val === review.attributes?.rating
          )?.[0];

          const ratingNumber =
            ratingEnumKey &&
            Object.keys(mapStarNumberToRating).find(
              (key) =>
                mapStarNumberToRating[Number(key)] ===
                //@ts-ignore
                Enum_Review_Rating[ratingEnumKey]
            );

          return (
            <CustomerReview
              key={review.id}
              userName={review.attributes?.name!}
              reviewDate={format(
                parseISO(review.attributes?.createdAt),
                "MMM d, yyyy"
              )}
              rating={Number(ratingNumber)}
              reviewComment={review.attributes?.comment!}
            />
          );
        })}
      {!reviews ||
        (reviews.length === 0 && (
          <NoReviewMessage>
            This product has no reviews yet, be the first!
          </NoReviewMessage>
        ))}
    </>
  );
};

export default CustomerReviewList;
