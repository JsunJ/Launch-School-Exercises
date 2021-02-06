function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/* This code logs 'Product2', 'Product3' and 'Product not found!'.
case '113' is the first match, but there is no break in the clause so it falls
through to the remaining clauses, which also don't have breaks. */