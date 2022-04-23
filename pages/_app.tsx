import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { Provider as CurrencyProvider } from "../src/utils/currencyProvider";
import { AuthProvider } from "../src/hooks/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <CurrencyProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CurrencyProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
