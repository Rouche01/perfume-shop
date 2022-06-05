import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { Provider as CurrencyProvider } from "../src/utils/currencyProvider";
import { AuthProvider } from "../src/hooks/auth";
import { CartProvider } from "../src/hooks/cart";
import StrapiApolloProvider from "../src/graphql/apollo";
import { ToastContainer } from "react-toastify";
import { RecentlyViewedProvider } from "../src/hooks/recentlyViewed";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StrapiApolloProvider>
        <AuthProvider>
          <RecentlyViewedProvider>
            <CartProvider>
              <CurrencyProvider>
                <Layout>
                  <Component {...pageProps} />
                  <ToastContainer />
                </Layout>
              </CurrencyProvider>
            </CartProvider>
          </RecentlyViewedProvider>
        </AuthProvider>
      </StrapiApolloProvider>
    </>
  );
}

export default MyApp;
