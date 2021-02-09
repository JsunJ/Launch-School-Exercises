let sumOfSquares = arr => arr.reduce((accumulator, element) => {
  element *= element;
  return accumulator + element;
}, 0); 

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83