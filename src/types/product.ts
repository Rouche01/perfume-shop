// export interface Product {
//   name: string;
//   image: string;
//   sku: string;
//   inventorySize?: number;
//   originalPrice: number;
//   salesPrice: number;
//   salesExist: boolean;
//   rating: number;
//   isNew?: boolean;
// }

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
