export interface HomeSlide {
  heroImg: string;
  mainTitle: string;
  supportingTitle: string;
  priceRangeValue: number;
  buttonText: string;
}

export interface CategoryNav {
  title: string;
  id: string;
}

export enum ShowcaseCategory {
  bestseller = "BESTSELLER",
  new = "NEW_ARRIVALS",
  topRated = "TOP_RATED",
}
