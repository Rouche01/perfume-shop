import { FC } from "react";
import {
  Container,
  ErrorInfo,
  ErrorText,
  ErrorTitle,
  NotFoundImage,
} from "./styles";
import Link from "next/link";

interface Props {}

const NotFoundPageView: FC<Props> = ({}) => {
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

export default NotFoundPageView;
