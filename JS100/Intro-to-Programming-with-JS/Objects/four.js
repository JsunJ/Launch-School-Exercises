let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let array = Object.keys(obj).map(value => value.toUpperCase());

console.log (array);
console.log(obj);