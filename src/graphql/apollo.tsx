import { ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";
import { client } from "../services/apollo";

const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return <ApolloProvider client={client()}>{children}</ApolloProvider>;
};

export default StrapiApolloProvider;
