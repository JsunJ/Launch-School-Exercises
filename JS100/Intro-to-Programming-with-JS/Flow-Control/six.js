function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
isArrayEmpty([1, 2, 3]);

/* This code logs 'Not Empty'. Although the array is actually empty, [] is not
falsy, therefore the first clause runs in the if statement. */