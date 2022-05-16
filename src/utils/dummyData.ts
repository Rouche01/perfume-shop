import { ShopFeature } from "../types/home";
import { CurrencyInfo } from "../types/global";

export const shopFeatures: ShopFeature[] = [
  {
    title: "Fast Delivery",
    body: "Experience the fastest delivery when you shop with us, no stories",
    icon: "rocket_launch",
  },
  {
    title: "Money Back Guarantee",
    body: "30 Days money back guarantee no question asked!",
    icon: "replay",
  },
  {
    title: "Online Support 24/7",
    body: "We’re here to support to you. Let’s get shopping now!",
    icon: "contact_support",
  },
];

export const supportedCurrency: CurrencyInfo[] = [
  {
    locale: "en-NG",
    currencyCode: "NGN",
  },
  {
    locale: "en-US",
    currencyCode: "USD",
  },
  {
    locale: "en-CA",
    currencyCode: "CAD",
  },
  {
    locale: "de-DE",
    currencyCode: "EUR",
  },
  {
    locale: "en-GB",
    currencyCode: "GBP",
  },
];
