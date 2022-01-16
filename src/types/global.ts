export interface CurrencyInfo {
  locale: string;
  currencyCode: string;
}

export interface CurrencyContext {
  currencyInfo: CurrencyInfo;
  setCurrencyInfo: (currency: CurrencyInfo) => void;
}
