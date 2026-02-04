function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide a number";
  }
  const result = num1 * num2;
  return result;
}
const result = multiply(5, "10");
console.log(result);
