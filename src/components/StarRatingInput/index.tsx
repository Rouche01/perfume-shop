import React, { FC } from "react";
import {
  Container,
  Button,
  ErrorText,
  Label,
  LabelContainer,
  StarContainer,
  StarIcon,
} from "./styles";

interface StarRatingInputProps {
  rating: number;
  hoverRating: number;
  setRating: (stars: number) => void;
  setHoverRating: React.Dispatch<React.SetStateAction<number>>;
  error?: string;
}

const StarRatingInput: FC<StarRatingInputProps> = ({
  rating,
  hoverRating,
  setHoverRating,
  setRating,
  error,
}) => {
  return (
    <Container>
      <LabelContainer>
        <Label>Your rating</Label>
        {error && <ErrorText>{error}</ErrorText>}
      </LabelContainer>
      <StarContainer>
        {[...Array(5)].map((_star, idx) => {
          idx += 1;
          return (
            <Button
              key={idx}
              filled={idx <= (hoverRating || rating)}
              onClick={(ev) => {
                ev.preventDefault();
                setRating(idx);
              }}
              onMouseEnter={() => setHoverRating(idx)}
              onMouseLeave={() => setHoverRating(rating)}
            >
              <StarIcon />
            </Button>
          );
        })}
      </StarContainer>
    </Container>
  );
};

export default StarRatingInput;
