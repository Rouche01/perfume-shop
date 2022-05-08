import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { Provider as CurrencyProvider } from "../src/utils/currencyProvider";
import { AuthProvider } from "../src/hooks/auth";
import { CartProvider } from "../src/hooks/cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <CurrencyProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CurrencyProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
