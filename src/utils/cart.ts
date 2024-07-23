import { CartState } from "@/types/cart";

export const CART_STATE = "cartState";

export const saveCartToLocalStorage = (state: CartState) => {
  if (window.localStorage) {
    window.localStorage.setItem(CART_STATE, JSON.stringify(state));
  }
};

export const getCartFromLocalStorage = () => {
  if (window.localStorage) {
    const cartJson = window.localStorage.getItem(CART_STATE);
    return cartJson ? JSON.parse(cartJson) : {};
  }

  return {};
};

export const isCartEmpty = (cartState: CartState) =>
  Object.keys(cartState).length === 0;
