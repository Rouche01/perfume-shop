import React, { FC } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Container, RateStar } from "./styles";

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
