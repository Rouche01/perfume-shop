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
  name: string;
  imageUrl: string;
}

export interface ProductInfoNavBarMenuList {
  id: string;
  name: string;
}
