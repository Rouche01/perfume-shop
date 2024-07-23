import { CustomProduct } from "./product";

export interface RecentlyViewedContextType {
  recentlyViewedProducts: CustomProduct[];
  addProductToRecentlyViewed: (productItem: CustomProduct) => void;
}
