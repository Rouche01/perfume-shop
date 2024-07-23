import config from "@/configs";
import { getAuthDataFromLocal } from "@/utils/auth";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: `${config.strapiServerUrl}/graphql` });

const authLink = new ApolloLink((operation, forward) => {
  const customHeaders = operation.getContext().hasOwnProperty("headers")
    ? operation.getContext().headers
    : {};

  const authData =
    typeof window !== "undefined" ? getAuthDataFromLocal() : null;

  operation.setContext({
    headers: {
      ...customHeaders,
      authorization: authData?.jwt ? `Bearer ${authData.jwt}` : "",
    },
  });

  return forward(operation);
});

export const client = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
