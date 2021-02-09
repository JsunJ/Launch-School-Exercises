let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let outer = 0; outer < myArray.length; outer += 1) {
  for (let inner = 0; inner < myArray[outer].length; inner += 1) {
    let num = myArray[outer][inner];
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}