import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  max-width: 900px;
  margin: 0 auto;
`;

const NotFoundImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ErrorInfo = styled.div`
  margin-left: 30px;
`;

const ErrorTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.94rem;
  color: #888;
`;

const Custom404 = () => {
  return (
    <Container>
      <NotFoundImage src="/404.png" />
      <ErrorInfo>
        <ErrorTitle>Error 404 Not Found</ErrorTitle>
        <ErrorText>
          We´re sorry but the page you are looking for does not exist. You could
          return to{" "}
          <Link href="/">
            <a style={{ fontWeight: 600, color: "#0a0a0a" }}>Home page</a>
          </Link>
          !
        </ErrorText>
      </ErrorInfo>
    </Container>
  );
};

export default Custom404;
