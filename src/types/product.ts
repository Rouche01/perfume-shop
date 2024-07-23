import { Product } from "@/graphql/generated/graphql";

export enum ProductRating {
  "one",
  "two",
  "three",
  "four",
  "five",
}

export interface ProductVariant {
  url?: string;
  formats: { [key: string]: any };
}

export interface ProductInfoNavBarMenuList {
  id: string;
  name: string;
}

export type CustomProduct = Omit<Product, "mainImage"> & {
  mainImage: { data?: { attributes?: { url: string } | null } | null };
};
