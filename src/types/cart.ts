import { Dispatch, SetStateAction } from "react";
import { string } from "yup";

export interface CartState {
  [key: string]: number;
}

export interface CartContextType {
  cartState: CartState;
  incrementProductInCart: (productSku: string) => void;
  decrementProductInCart: (productSku: string) => void;
  addToCart: (productSku: string, quantity: number) => void;
  removeProductFromCart: (productSku: string) => void;
  setCartState: Dispatch<SetStateAction<CartState>>;
}

export interface ProductsInCart {
  name?: string;
  image?: string;
  sku: string;
  cumulativePrice: number;
  quantity: number;
}
