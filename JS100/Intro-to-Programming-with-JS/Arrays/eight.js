/* 

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = arr => arr.map(string => string.length).filter(length => {
  length % 2
});
console.log(oddLengths(arr)); // => [1, 5, 3]

*/

let oddLengths = arr => arr.reduce((accumulator, element) => {
  if (element.length % 2) {
    accumulator.push(element.length);
  }
  return accumulator;
}, []);


let array = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(array)); // => [1, 5, 3]