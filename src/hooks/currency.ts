import { useMemo } from "react";
import { CurrencyInfo } from "../types/global";

export const useCurrencyConverter = (currency: CurrencyInfo) => {
  const { currencyCode, locale } = currency;
  const mappedMultiplier: { [key: string]: number } = {
    USD: 0.0025,
    CAD: 0.003,
    EUR: 0.0021,
    GBP: 0.0018,
    NGN: 1,
  };

  return useMemo(
    () => ({
      convertToCurrency: (price: number) =>
        mappedMultiplier[currencyCode] * price,
      formatPrice: (price: number) =>
        Number(mappedMultiplier[currencyCode] * price).toLocaleString(locale, {
          style: "currency",
          currency: currencyCode,
        }),
    }),
    [currencyCode]
  );
};
