import { Product } from "../graphql/generated/graphql"
import { CustomProduct } from "./product"

export interface RecentlyViewedContext {
  recentlyViewedProducts: CustomProduct[]
  addProductToRecentlyViewed: (productItem: CustomProduct) => void
}