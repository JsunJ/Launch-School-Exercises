let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = arr => arr.map(string => string.length).filter(length => {
  length % 2
});
console.log(oddLengths(arr)); // => [1, 5, 3]