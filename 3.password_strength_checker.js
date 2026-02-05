/**
 * Problem 3: Password Strength Checker
Function name: checkPassword(password)
Rules:
Length must be at least 8


Must contain at least 1 number


Must contain at least 1 uppercase letter


Must not contain spaces


Test case 1
Input:  "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }

Test case 2
Input:  "Hello123"
Output: { valid: true, reasons: [] }

 */

function checkPassword(password) {
  let reasons = [];
  let length = password.length;
  let hasNumber = false;
  let hasUpperCase = false;
  let hasSpace = password.includes(" ");
  if (length < 8) {
    reasons.push("Length must be at least 8");
  }
  for (let i = 0; i < length; i++) {
    let character = password[i];
    // console.log(character);
    if (character >= "0" && character <= "9") {
      hasNumber = true;
    }
    if (character >= "A" && character <= "Z") {
      hasUpperCase = true;
    }
  }
  //console.log(password, length, hasUpperCase, hasNumber);
  if (hasNumber === false) {
    reasons.push("Missing number");
  }
  if (hasUpperCase === false) {
    reasons.push("Missing uppercase letter");
  }
  if (hasSpace === true) {
    reasons.push("Space found!!!");
  }
  //console.log(hasSpace);

  //   let isValid = reasons.length === 0;
  let isValid;
  if (reasons.length === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return {
    valid: isValid,
    reasons,
  };
}
let output1 = checkPassword("helloWorld");
console.log(output1);
let output2 = checkPassword("Hello123");
console.log(output2);
