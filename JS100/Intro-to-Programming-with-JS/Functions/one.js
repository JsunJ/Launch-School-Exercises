let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* 1 is logged to the console. The foo() function declares a 2nd bar variable
with block scope. This 2nd bar has no affect on the 1st bar variable declared in
the global scope. */