import { type Locale } from "next-intl";
export const LOCALES: Record<Locale, Locale> = {
    es: "es",
    en: "en",
    fr: "fr",
    de: "de",
} as const;

export const LANGUAGE_OPTIONS = [
  { code: LOCALES.en, label: "English" },
  { code: LOCALES.es, label: " Español" },
  { code: LOCALES.fr, label: "Français" },
  { code: LOCALES.de, label: "Deutsch" },
];
