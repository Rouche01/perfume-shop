import { createContext, FC, useContext, useState } from "react";
import { CurrencyContext, CurrencyInfo } from "../types/global";

export const Context = createContext<CurrencyContext>({
  currencyInfo: {
    locale: "en-NG",
    currencyCode: "NGN",
  },
  setCurrencyInfo: () => {},
});

export const useCurrencyContext = () => useContext(Context);

export const createCurrencyContext = () => {
  const [currency, setCurrency] = useState<CurrencyInfo>({
    currencyCode: "NGN",
    locale: "en-NG",
  });

  const Provider: FC = ({ children }) => {
    return (
      <Context.Provider
        value={{ currencyInfo: currency, setCurrencyInfo: setCurrency }}
      >
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
