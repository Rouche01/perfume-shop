import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

interface ArrowProps {
  component: any;
  left: number;
}

export const StyledSlider = styled(Slider)`
  margin: 30px 0;
`;

export const Arrow = styled(({ component, ...props }: ArrowProps) =>
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
