export interface Product {
  name: string;
  image: string;
  originalPrice: number;
  salesPrice: number;
  salesExist: boolean;
  rating: number;
  isNew?: boolean;
}
