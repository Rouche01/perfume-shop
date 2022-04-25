export interface Product {
  name: string;
  image: string;
  originalPrice: number;
  salesPrice: number;
  salesExist: boolean;
  rating: number;
  isNew?: boolean;
}

export interface ProductVariant {
  name: string;
  imageUrl: string;
}

export interface ProductInfoNavBarMenuList {
  id: string;
  name: string;
}
