import React, { FC } from "react";
import { Container, ErrorIcon, ErrorMessage } from "./styles";

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
