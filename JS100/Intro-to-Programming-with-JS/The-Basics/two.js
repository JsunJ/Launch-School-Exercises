let number = 4936;

let ones = number % 10;
console.log(ones); // 6

number -= ones;
number /= 10;
let tens = number % 10;
console.log(tens); // 3

number -= tens;
number /= 10;
let hundreds = number % 10;
console.log(hundreds); // 9

number -= hundreds;
number /= 10;
let thousands = number % 10;
console.log(thousands); // 4