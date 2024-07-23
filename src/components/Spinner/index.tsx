import React, { FC } from "react";
import { Container, SpinningCircle } from "./styles";

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
