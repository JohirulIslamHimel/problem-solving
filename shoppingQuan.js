const product = [
  { name: "shampoo", price: 500, quantity: 2 },
  { name: "bread", price: 200, quantity: 1 },
  { name: "milk", price: 300, quantity: 3 },
];
function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    const thisProductCost = product.price * product.quantity;
    total = total + thisProductCost;
  }
  return total;
}
const total = cartTotal(product);
console.log(total);
