const { formatPrice } = require("./cart");

test("test d'entiers", () => {
  expect(formatPrice(5)).toBe("5,00 €");
  expect(formatPrice(10)).toBe(`10,00 €`);
});

test("test de nombres à virgule", () => {
  expect(formatPrice(2.987987)).toBe("2,99 €");
});
