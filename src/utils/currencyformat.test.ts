import { describe, it, expect } from "vitest";
import { localeToCurrency } from "@/utils/currencyformat.constants";
import { LOCALES } from "@/constants";
import { currencyFormat } from "./currencyformat";

describe("utils | curreny format", () => {
  it("formats amount correctly in USD for en locale", () => {
    const currency = localeToCurrency.en;
    const locale = LOCALES.en;
    const amount = 10000;

    expect(currencyFormat(amount, currency, locale)).toEqual("$10,000");
  });
});


