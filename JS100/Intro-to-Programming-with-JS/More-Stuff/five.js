function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
};

console.log(doSomething('I Love You Too')); // [3, 3, 4, 1]

/* splits string into array of words delimited by a space, reverses array,
creates new array consisting of the length of words
*/