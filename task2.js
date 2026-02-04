/**
 *দুইটা সংখ্যার মধ্যে বড়টা return করার function
 */
function bigNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
//const num = bigNumber(5, 7);
// console.log(num);
console.log(bigNumber(5, 7));
console.log(bigNumber(15, 7));
console.log(bigNumber(5, 71));
console.log(bigNumber(51, 7));
console.log(bigNumber(51, 52));
