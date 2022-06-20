const { getTotalWithTaxes } = require("./cart");
const cart = require("./products");

console.log("Your total is: " + getTotalWithTaxes(cart));
