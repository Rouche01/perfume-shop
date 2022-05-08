import { ShopFeature } from "../types/home";
import { Product, ProductVariant } from "../types/product";
import { VscRocket } from "react-icons/vsc";
import {
  MdOutlineReplay,
  MdSupportAgent,
  MdOutlineDeliveryDining,
} from "react-icons/md";
import { CurrencyInfo } from "../types/global";

export const productPageImages: ProductVariant[] = [
  { name: "gold", imageUrl: "/products/product-item-8.jpg" },
  { name: "pink", imageUrl: "/products/product-item-2.jpg" },
];

export const products: Product[] = [
  {
    name: "Super Tweeter",
    inventorySize: 8,
    sku: "PLU-002",
    image: "/products/product-item-1.jpg",
    originalPrice: 27300,
    salesPrice: 22000,
    salesExist: true,
    rating: 3,
    isNew: true,
  },
  {
    name: "Auto Accents",
    inventorySize: 8,
    sku: "PLU-003",
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
    inventorySize: 8,
    sku: "PLU-004",
    originalPrice: 27300,
    salesPrice: 22000,
    salesExist: true,
    rating: 3,
    isNew: true,
  },
  {
    name: "Aoud Queen Roses",
    image: "/products/product-item-4.jpg",
    inventorySize: 8,
    sku: "PLU-005",
    originalPrice: 19000,
    salesPrice: 16500,
    salesExist: true,
    rating: 3,
    isNew: false,
  },
  {
    name: "Series Chrome",
    image: "/products/product-item-5.jpg",
    inventorySize: 8,
    sku: "PLU-006",
    originalPrice: 25000,
    salesPrice: 16500,
    salesExist: true,
    rating: 2,
    isNew: false,
  },
  {
    name: "Shift Knob",
    inventorySize: 8,
    sku: "PLU-007",
    image: "/products/product-item-6.jpg",
    originalPrice: 19000,
    salesPrice: 16500,
    salesExist: true,
    rating: 4,
    isNew: false,
  },
  {
    name: "Tuscan Creations",
    inventorySize: 8,
    sku: "PLU-008",
    image: "/products/product-item-7.jpg",
    originalPrice: 22000,
    salesPrice: 19000,
    salesExist: true,
    rating: 3,
    isNew: true,
  },
  {
    name: "Patiala Eau",
    inventorySize: 8,
    sku: "PLU-001",
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
