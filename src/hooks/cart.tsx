import { createContext, FC, useContext, useEffect, useState } from "react";
import { CartContext, CartState } from "../types/cart";
import {
  getCartFromLocalStorage,
  isCartEmpty,
  saveCartToLocalStorage,
} from "../utils/cart";

const CartContext = createContext<CartContext>({
  cartState: {},
  incrementProductInCart: () => {},
  decrementProductInCart: () => {},
  setCartState: () => {},
  addToCart: () => {},
  removeProductFromCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: FC = ({ children }) => {
  const [cartState, setCartState] = useState<CartState>({});

  useEffect(() => {
    if (isCartEmpty(cartState)) {
      const cartFromLocalStorage = getCartFromLocalStorage();
      setCartState(cartFromLocalStorage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const incrementProductInCart = (productSku: string) => {
    if (!cartState[productSku]) {
      setCartState({ ...cartState, [productSku]: 1 });
      return;
    }

    const newCartState = {
      ...cartState,
      [productSku]: cartState[productSku] + 1,
    };
    setCartState(newCartState);
    saveCartToLocalStorage(newCartState);
  };

  const decrementProductInCart = (productSku: string) => {
    if (!cartState[productSku]) {
      return;
    }

    const newCartState = {
      ...cartState,
      [productSku]: cartState[productSku] - 1,
    };
    setCartState(newCartState);
    saveCartToLocalStorage(newCartState);
  };

  const addToCart = (productSku: string, quantity: number) => {
    if (!cartState[productSku]) {
      setCartState({ ...cartState, [productSku]: quantity });
      saveCartToLocalStorage({ ...cartState, [productSku]: quantity });
      return;
    }

    const newCartState = {
      ...cartState,
      [productSku]: cartState[productSku] + quantity,
    };
    setCartState(newCartState);
    saveCartToLocalStorage(newCartState);
  };

  const removeProductFromCart = (productSku: string) => {
    if (!cartState[productSku]) {
      return;
    }

    const newCartState = { ...cartState };
    delete newCartState[productSku];
    setCartState(newCartState);
    saveCartToLocalStorage(newCartState);
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        decrementProductInCart,
        incrementProductInCart,
        setCartState,
        addToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
