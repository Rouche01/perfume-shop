import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #c40000;
  box-shadow: 0 0 0 3px #fcf4f4 inset;
  margin-top: 20px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
`;

const ErrorIcon = styled.span.attrs({
  className: "material-icons material-icons-outlined md-36",
})`
  color: #c400009a;
`;

const ErrorMessage = styled.div`
  margin-left: 24px;
`;

const ErrorTitle = styled.h4`
  color: #c40000;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 1.15rem;
`;

const ErrorSubtitle = styled.p`
  margin: 0;
  padding: 0;
  color: #111111;
  font-size: 0.9rem;
`;

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
