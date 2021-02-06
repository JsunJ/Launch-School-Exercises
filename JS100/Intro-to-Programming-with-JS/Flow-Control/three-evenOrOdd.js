let evenOrOdd = (int) => {
  if (Number.isInteger(int) && int % 2 === 0) {
    console.log('even');
  } else if (Number.isInteger(int)) {
    console.log('odd');
  } else {
    console.log('Not a number.');
  }
}

evenOrOdd(4);
evenOrOdd(3);
evenOrOdd('4');