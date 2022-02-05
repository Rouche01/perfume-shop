import React, { FC } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface ArrowProps {
  component: any;
  left: number;
}

const StyledSlider = styled(Slider)`
  margin: 30px 0;
`;

const Arrow = styled(({ component, ...props }: ArrowProps) =>
  React.cloneElement(component, props)
)`
  background-color: white;
  color: #888;
  position: absolute;
  padding: 0;
  top: 50%;
  left: ${(props) => `${props.left}%`};
  width: 50px;
  height: 50px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  border: 1px solid white;
  cursor: pointer;
  z-index: 100;
`;

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
