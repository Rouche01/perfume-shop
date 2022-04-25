import React, { FC } from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const RateStar = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  color: #ffb933;
`;

interface StarRatingProps {
  rating: number;
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
  return (
    <Container>
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? "fill" : "outline"
      ).map((val, idx) =>
        val === "fill" ? (
          <RateStar key={`${val}-${idx}`} component={<AiFillStar />} />
        ) : (
          <RateStar key={`${val}-${idx}`} component={<AiOutlineStar />} />
        )
      )}
    </Container>
  );
};

export default StarRating;
