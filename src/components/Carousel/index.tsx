import React, { FC } from "react";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Arrow, StyledSlider } from "./styles";

interface CarouselProps {
  slides: JSX.Element[];
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <Arrow
        component={
          <button>
            <MdOutlineArrowBackIos size={18} />
          </button>
        }
        left={4}
      />
    ),
    prevArrow: (
      <Arrow
        component={
          <button>
            <MdOutlineArrowForwardIos size={18} />
          </button>
        }
        left={96}
      />
    ),
  };
  return (
    <>
      <StyledSlider {...settings}>{slides}</StyledSlider>
    </>
  );
};

export default Carousel;
