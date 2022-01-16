import { ShopFeature } from "../types/home";
import { Product } from "../types/product";
import { VscRocket } from "react-icons/vsc";
import { MdOutlineReplay, MdSupportAgent } from "react-icons/md";
import { CurrencyInfo } from "../types/global";

export const products: Product[] = [
  {
    name: "Super Tweeter",
    image: "/products/product-item-1.jpg",
    originalPrice: 27300,
    salesPrice: 22000,
    salesExist: true,
    rating: 3,
    isNew: true,
  },
  {
    name: "Auto Accents",
    image: "/products/product-item-2.jpg",
    originalPrice: 25000,
    salesPrice: 19000,
    salesExist: true,
    rating: 3,
    isNew: true,
  },
  {
    name: "Rose Elixir",
    image: "/products/product-item-3.jpg",
    originalPrice: 27300,
    salesPrice: 22000,
    salesExist: true,
    rating: 3,
    isNew: true,
  },
  {
    name: "Aoud Queen Roses",
    image: "/products/product-item-4.jpg",
    originalPrice: 19000,
    salesPrice: 16500,
    salesExist: true,
    rating: 3,
    isNew: false,
  },
  {
    name: "Series Chrome",
    image: "/products/product-item-5.jpg",
    originalPrice: 25000,
    salesPrice: 16500,
    salesExist: true,
    rating: 2,
    isNew: false,
  },
  {
    name: "Shift Knob",
    image: "/products/product-item-6.jpg",
    originalPrice: 19000,
    salesPrice: 16500,
    salesExist: true,
    rating: 4,
    isNew: false,
  },
  {
    name: "Tuscan Creations",
    image: "/products/product-item-7.jpg",
    originalPrice: 22000,
    salesPrice: 19000,
    salesExist: true,
    rating: 3,
    isNew: true,
  },
  {
    name: "Patiala Eau",
    image: "/products/product-item-8.jpg",
    originalPrice: 27000,
    salesPrice: 21000,
    salesExist: true,
    rating: 5,
    isNew: false,
  },
];

export const shopFeatures: ShopFeature[] = [
  {
    title: "Fast Delivery",
    body: "Experience the fastest delivery when you shop with us, no stories",
    icon: VscRocket,
  },
  {
    title: "Money Guarantee",
    body: "30 Days money back guarantee no question asked!",
    icon: MdOutlineReplay,
  },
  {
    title: "Online Support 24/7",
    body: "We’re here to support to you. Let’s get shopping now!",
    icon: MdSupportAgent,
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
