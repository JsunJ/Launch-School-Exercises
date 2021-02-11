let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // => [ 1, 4, 3]

/* Both array1 and array2 are pointing to the same real array in memory. The
second element of this array is then mutated by line 3. */