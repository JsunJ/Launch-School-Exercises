let getNum = prompt => {
  let rlSync = require('readline-sync');
  let input = rlSync.question(prompt);
  return input;
}

let multiply = (firstNum, secondNum) => {
  let product = firstNum * secondNum;
  return product;
}

let firstNum = getNum("Enter first number: ");
let secondNum = getNum("Enter second number: ");

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);