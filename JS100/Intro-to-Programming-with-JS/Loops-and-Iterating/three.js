let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* This code causes an infinite loop because 1 is assigned to counter in the
loop's initialization. 1 is logged to the console, and counter is then
incremented to 2. The condition never becomes false. Likewise, counter never
becomes greater than 2 in order to trigger the break in the loop. */