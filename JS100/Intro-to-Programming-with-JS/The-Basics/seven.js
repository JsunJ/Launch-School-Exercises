let foo = ['a', 'b', 'c'];

console.log(foo.length); // 3

console.log(foo[3]); // undefined

/* There is no element in index 3 of foo. JavaScript will return undefined
rather than throw an error. This is a case of silent failure. */