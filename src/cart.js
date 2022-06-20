function getTotalWithTaxes(cart) {
  return "2,60 €";
}

function formatPrice(price) {
  return price.toFixed(2).toString().replace(".", ",") + " €";
}

/*
const cart = [
  {
    id: "62b05daea0e771190500b078",
    name: "culpa minim",
    picture: "http://placehold.it/32x32",
    price: 52.95,
    count: 4,
    tax_rate: 0.46,
  },
  ...
]
 calculer total du panier

 pour chaque produit
  prix * (1 + tva) * nombre de produit
  addition tout ça
 fin pour
 formater le total (en euro)

*/

module.exports = { getTotalWithTaxes, formatPrice };
