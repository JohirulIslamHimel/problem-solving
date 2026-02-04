//function যেটা একটা সংখ্যা নিয়ে বলবে সেটা even নাকি odd।
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(evenOrOdd(20));
console.log(evenOrOdd(19));
console.log(evenOrOdd(55));
console.log(evenOrOdd(12));
console.log(evenOrOdd(33));
console.log(evenOrOdd(17));
console.log(evenOrOdd(-18));
