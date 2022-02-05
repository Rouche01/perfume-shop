export interface CurrencyInfo {
  locale: string;
  currencyCode: string;
}

export interface CurrencyContext {
  currencyInfo: CurrencyInfo;
  setCurrencyInfo: (currency: CurrencyInfo) => void;
}

export enum SortOptions {
  featured = "Featured",
  lowToHigh = "Price: Low To High",
  highToLow = "Price: High To Low",
  alphabeticallyAZ = "A - Z: Alphabetically",
  alphabeticallyZA = "Z - A: Alphabetically",
  averageRating = "Average Rating",
  newestArrivals = "Newest Arrivals",
}
