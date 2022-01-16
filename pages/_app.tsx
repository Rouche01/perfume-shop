import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { createCurrencyContext } from "../src/utils/currencyProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const { Provider: CurrencyProvider } = createCurrencyContext();

  return (
    <>
      <CurrencyProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CurrencyProvider>
    </>
  );
}

export default MyApp;
