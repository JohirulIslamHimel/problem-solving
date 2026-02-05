/**
 * Problem 4: Shopping Bill Calculator
Function name: calcBill(prices, items)
Statement:  Calculate total bill amount and count how many times each item appears.
Test case 1
Input: 
     prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
     items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

Output:
{
  total: 376,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}

Test case 2
Input:
prices = { pen: 10, book: 50 };
items = ["pen", "pen", "book", "pen"];

Output:
{
  total: 80,
  itemCount: { pen: 3, book: 1 }
}

 */

function calcBill(prices, items) {
  console.log(prices, items);
  let itemCount = {};
  let total = 0;

  for (let item of items) {
    if (itemCount.hasOwnProperty(item)) {
      itemCount[item] += 1;
    } else {
      itemCount[item] = 1;
    }
  }

  for (let item in itemCount) {
    let price = prices[item];
    let quantity = itemCount[item];
    //total += price;
    let totalPriceWithQuantity = price * quantity;
    total = total + totalPriceWithQuantity;
  }
  //console.log(total);

  return {
    total,
    itemCount,
  };
}

let output1 = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
console.log(output1);
