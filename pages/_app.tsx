import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { Provider as CurrencyProvider } from "../src/utils/currencyProvider";
import { AuthProvider } from "../src/hooks/auth";
import { CartProvider } from "../src/hooks/cart";
import StrapiApolloProvider from "../src/graphql/apollo";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StrapiApolloProvider>
        <AuthProvider>
          <CartProvider>
            <CurrencyProvider>
              <Layout>
                <Component {...pageProps} />
                <ToastContainer />
              </Layout>
            </CurrencyProvider>
          </CartProvider>
        </AuthProvider>
      </StrapiApolloProvider>
    </>
  );
}

export default MyApp;
