const product = [
  { name: "shampoo", price: 500, quantity: 2 },
  { name: "bread", price: 200, quantity: 1 },
  { name: "milk", price: 300, quantity: 3 },
];
function getExpensiveItem(products, priceLimit) {
  let expensiveOne = [];
  for (const product of products) {
    if (product.price > priceLimit) {
      expensiveOne.push(product);
    }
  }
  return expensiveOne;
}
const expensiveItem = getExpensiveItem(product, 250);
console.log("Expensive item is: ", expensiveItem);
