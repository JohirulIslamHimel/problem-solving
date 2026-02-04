const product = [
  { name: "Shampoo", price: 5.99, category: "Personal Care" },
  { name: "Bread", price: 2.49, category: "Food" },
  { name: "Milk", price: 3.19, category: "Food" },
  { name: "Toothpaste", price: 4.29, category: "Personal Care" },
  { name: "Eggs", price: 2.99, category: "Food" },
  { name: "Soap", price: 1.99, category: "Personal Care" },
];
function getShoppingTotal(products) {
  let total = 0;
  for (const product of products) {
    total = total + product.price;
  }
  return total;
}
const totalPrice = getShoppingTotal(product);
console.log("Total shopping cost is: ", totalPrice);
