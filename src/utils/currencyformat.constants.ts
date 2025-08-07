import { LOCALES } from "@/constants";

export const exchangeRates: Record<string, number> = {
  COP: 4200,
  EUR: 0.92,
  USD: 1,
};

export const localeToCurrency: Record<keyof typeof LOCALES, string> = {
  es: "COP",
  en: "USD",
  fr: "EUR",
  de: "EUR",
};