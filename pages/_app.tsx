import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import StrapiApolloProvider from "@/graphql/apollo";
import { AuthProvider } from "@/hooks/auth";
import { RecentlyViewedProvider } from "@/hooks/recentlyViewed";
import { CartProvider } from "@/hooks/cart";
import { Provider as CurrencyProvider } from "@/utils/currencyProvider";
import Layout from "@/components/Layout";
import { ToastContainer } from "react-toastify";

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
