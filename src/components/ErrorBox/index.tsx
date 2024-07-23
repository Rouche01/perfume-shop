import React, { FC } from "react";

import {
  Container,
  ErrorIcon,
  ErrorMessage,
  ErrorSubtitle,
  ErrorTitle,
} from "./styles";

interface ErrorBoxProps {
  title: string;
  subtitle: string;
}

const ErrorBox: FC<ErrorBoxProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <ErrorIcon>report_problem</ErrorIcon>
      <ErrorMessage>
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorSubtitle>{subtitle}</ErrorSubtitle>
      </ErrorMessage>
    </Container>
  );
};

export default ErrorBox;
