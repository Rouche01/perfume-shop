import { createContext, FC, useContext, useEffect, useState } from "react";
import { CustomProduct } from "@/types/product";
import { RecentlyViewedContextType } from "@/types/recentlyViewed";
import {
  getRecentlyViewedFromLocalStorage,
  saveRecentlyViewedToLocalStorage,
} from "@/utils/recentlyViewed";

const RecentlyViewedContext = createContext<RecentlyViewedContextType>({
  recentlyViewedProducts: [],
  addProductToRecentlyViewed: () => {},
});

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);

export const RecentlyViewedProvider: FC = ({ children }) => {
  const [recentlyViewedList, setRecentlyViewedList] = useState<CustomProduct[]>(
    []
  );

  useEffect(() => {
    if (recentlyViewedList.length === 0) {
      const recentlyViewedFromLocalStorage =
        getRecentlyViewedFromLocalStorage();
      setRecentlyViewedList(recentlyViewedFromLocalStorage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addProductToRecentlyViewed = (productItem: CustomProduct) => {
    let newList: CustomProduct[] = [];
    const indexOfItem = recentlyViewedList.findIndex(
      (item) => item.slug === productItem.slug
    );

    if (indexOfItem === 0) return;

    if (indexOfItem < 0) {
      newList = recentlyViewedList.slice(0, 3);
    }

    if (indexOfItem > 0) {
      newList = [...recentlyViewedList];
      newList.splice(indexOfItem, 1);
    }

    newList.unshift(productItem);
    setRecentlyViewedList(newList);
    saveRecentlyViewedToLocalStorage(newList);
  };

  return (
    <RecentlyViewedContext.Provider
      value={{
        recentlyViewedProducts: recentlyViewedList,
        addProductToRecentlyViewed,
      }}
    >
      {children}
    </RecentlyViewedContext.Provider>
  );
};
