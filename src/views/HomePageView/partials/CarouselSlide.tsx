import { FC } from "react";
import Image from "next/image";
import { LineButton } from "@/components/shared";

import {
  Slide,
  SlideMajorTitle,
  SlidePriceInfo,
  SlideSupportTitle,
  SlideTextGroup,
} from "../styles";

interface Props {
  heroImg: string;
  title: string;
  subtitleComponent: () => JSX.Element;
  priceRangeValue: number;
  buttonText: string;
  priceFormatter: (price: number) => string;
}

const CarouselSlide: FC<Props> = ({
  buttonText,
  heroImg,
  priceRangeValue,
  subtitleComponent,
  title,
  priceFormatter,
}) => {
  return (
    <Slide>
      <Image src={heroImg} width={500} height={500} alt="slideshow" />
      <SlideTextGroup>
        <SlideMajorTitle>{title}</SlideMajorTitle>
        <SlideSupportTitle>{subtitleComponent()}</SlideSupportTitle>
        <SlidePriceInfo>
          Price from:{" "}
          <span
            style={{
              fontSize: "1.75rem",
              color: "#ab8e66",
              fontWeight: "600",
            }}
          >
            {priceFormatter(priceRangeValue)}
          </span>
        </SlidePriceInfo>
        <LineButton>{buttonText}</LineButton>
      </SlideTextGroup>
    </Slide>
  );
};

export default CarouselSlide;
