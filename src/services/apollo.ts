import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://localhost:1337/graphql" });

const authLink = new ApolloLink((operation, forward) => {
  const customHeaders = operation.getContext().hasOwnProperty("headers")
    ? operation.getContext().headers
    : {};

  operation.setContext({
    headers: { ...customHeaders },
  });

  return forward(operation);
});

export const client = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
