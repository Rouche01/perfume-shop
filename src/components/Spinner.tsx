import React, { FC } from "react";
import styled, { keyframes, css } from "styled-components";

interface CircleProps {
  size?: number;
  color?: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg)}
  100% { transform: rotate(360deg)}
`;

const SpinningCircle = styled.div<CircleProps>`
  width: ${({ size }) => (size ? `${size}rem` : "1.5rem")};
  height: ${({ size }) => (size ? `${size}rem` : "1.5rem")};
  border-color: ${({ color }) => (color ? color : "rgba(255, 255, 255, 1)")};
  border-radius: 9999px;
  border-top: ${({ color }) =>
    color ? `2px solid ${color}` : "2px solid #fff"};
  border-bottom-width: ${({ color }) =>
    color ? `2px solid ${color}` : "2px solid #fff"};
  animation: ${spin} 1s linear infinite;
`;

interface SpinnerProps {
  size?: number; // size in rem
  color?: string;
}

const Spinner: FC<SpinnerProps> = ({ size, color }) => {
  return (
    <Container>
      <SpinningCircle size={size} color={color} />
    </Container>
  );
};

export default Spinner;
