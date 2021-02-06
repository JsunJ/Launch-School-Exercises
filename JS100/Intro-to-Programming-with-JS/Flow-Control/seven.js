let allCaps = (string) => {
  if (string.length <= 10) {
    return string;
  } else {
    return string.toUpperCase();
  }
}

console.log(allCaps('hello world'));
console.log(allCaps('goodbye'));
console.log(allCaps('abcdefghij'));