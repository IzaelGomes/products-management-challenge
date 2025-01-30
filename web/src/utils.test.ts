import { formatDate, formatNumberToCurrency } from "./utils";

describe("utils", () => {
  it("should format a number to brazil currency", () => {
    const prices = [5000, 100];

    expect(formatNumberToCurrency(prices[0]).replace(/\u00A0/g, " ")).toBe(
      "R$ 5.000,00"
    );
    expect(formatNumberToCurrency(prices[1]).replace(/\u00A0/g, " ")).toBe(
      "R$ 100,00"
    );
  });

  it("should format a date", () => {
    const isoDate = "2025-01-30T06:37:33.452Z";
    expect(formatDate(isoDate)).toBe("30/01/2025");
  });
});
