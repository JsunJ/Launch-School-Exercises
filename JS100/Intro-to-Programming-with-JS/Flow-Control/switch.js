let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
} // => a is 5

let b = 5;

if (b === 5) {
  console.log('b is 5');
} else if (b === 6) {
  console.log('b is 6');
} else {
  console.log('b is neither 5, nor 6');
} // => b is 5