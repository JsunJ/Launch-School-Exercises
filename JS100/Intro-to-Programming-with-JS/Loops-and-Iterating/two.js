let factorial = (n) => {
  let result = 1;
  for (let i = n; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));