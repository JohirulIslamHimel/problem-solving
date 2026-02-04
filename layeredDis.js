/**
 * first 100 ---> 100
 * 101 - 200 ---> 90
 * above 200 ---> 70
 */
function layeredDiscountTotal(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;
  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100PriceTotal = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const second100PriceTotal = remainingQuantity * second100Price;
    const total = first100PriceTotal + second100PriceTotal;
    return total;
  } else {
    const first100PriceTotal = 100 * first100Price;
    const second100PriceTotal = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const above200PriceTotal = remainingQuantity * above200Price;
    const total = first100PriceTotal + second100PriceTotal + above200PriceTotal;
    return total;
  }
}
const total = layeredDiscountTotal(50);
console.log("Total price is: ", total);
