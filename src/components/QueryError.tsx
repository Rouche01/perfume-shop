import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 30px 0 10px;
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

const ErrorIcon = styled.span.attrs({
  className: "material-icons material-icons-outlined md-70",
})`
  color: #bbbbbb9d;
`;

interface QueryErrorProps {
  resourceName?: string;
}

const QueryError: FC<QueryErrorProps> = ({ resourceName }) => {
  return (
    <Container>
      <ErrorIcon>report_problem</ErrorIcon>
      <ErrorMessage>
        Unable to retrieve {`${resourceName || "data"}`}
      </ErrorMessage>
    </Container>
  );
};

export default QueryError;
