import { CustomProduct } from "../types/product";

export const RECENTLY_VIEWED = "recentlyViewed";

export const saveRecentlyViewedToLocalStorage = (list: CustomProduct[]) => {
  if (window.localStorage) {
    window.localStorage.setItem(RECENTLY_VIEWED, JSON.stringify(list));
  }
};

export const getRecentlyViewedFromLocalStorage = () => {
  if (window.localStorage) {
    const recentlyViewedJson = window.localStorage.getItem(RECENTLY_VIEWED);
    return recentlyViewedJson ? JSON.parse(recentlyViewedJson) : [];
  }

  return [];
};

// export const isCartEmpty = (cartState: CartState) =>
//   Object.keys(cartState).length === 0;
