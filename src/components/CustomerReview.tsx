import React, { FC } from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 28px;
`;

const UserAvatar = styled.div.attrs({
  className: "material-icons material-icons-outlined md-54",
})`
  background-color: #e6e6e6;
  border-radius: 999px;
  color: #8c8c8c;
`;

const ReviewInfo = styled.div`
  margin-left: 30px;
  width: 100%;
`;

const ReviewMeta = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 7px;
`;

const UserNamePlusReviewDate = styled.p`
  font-size: 1.06rem;
  color: #666;
  padding: 0;
  margin: 0;
`;

const ReviewText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  color: #666;
  padding: 0 0 20px;
`;

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
  console.log(rating)
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
