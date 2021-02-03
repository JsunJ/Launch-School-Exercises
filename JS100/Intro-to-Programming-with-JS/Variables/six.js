const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* This code will log bar to the console without errors because the block-scoped
declaration is a separate variable. */