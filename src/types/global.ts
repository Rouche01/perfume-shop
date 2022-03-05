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

export interface ContactFormValues {
  name: string;
  emailAddress: string;
  phone: string;
  company: string;
  message: string;
}

export interface LoginFormvalues {
  emailAddress: string;
  password: string;
}

export interface RegisterFormValues {
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
}
