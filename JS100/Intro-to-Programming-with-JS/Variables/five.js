let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // bar

/* This code logs bar to the console. The reassignment using the let keyword is
block-scoped and therefore doesn't not affect the first variable. The first
variable with the assigned value of bar is still within scope of the
console.log() statement. */