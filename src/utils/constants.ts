import { Enum_Review_Rating } from "@/graphql/generated/graphql";

export const mapStarNumberToRating: { [key: number]: Enum_Review_Rating } = {
  1: Enum_Review_Rating.VeryBad,
  2: Enum_Review_Rating.Bad,
  3: Enum_Review_Rating.Okay,
  4: Enum_Review_Rating.Good,
  5: Enum_Review_Rating.Great,
};
