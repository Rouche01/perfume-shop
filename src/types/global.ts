import { FieldError, UseFormRegister } from "react-hook-form";

export type RegisterFn<T extends CustomFormValues> = UseFormRegister<T>;
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

export interface CustomFormValues {
  [key: string]: any;
}

export interface ContactFormValues {
  name: string;
  emailAddress: string;
  phone: string;
  company: string;
  message: string;
}

export interface CustomerReviewFormValues {
  reviewComment: string;
  rating?: number;
  name: string;
  emailAddress: string;
}

export interface CustomerReviewFormErrors {
  reviewComment?: FieldError | undefined;
  rating?: FieldError | undefined;
  name?: FieldError | undefined;
  emailAddress?: FieldError | undefined;
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
