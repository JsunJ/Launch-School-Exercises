for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/* This code does not produce an error and logs 1 through 5 to the console.
line 2 adds i (0) to 1 and assigns that to i, then logs it to the console
resulting in an output of 1. On the next iteration, i now has a value of 1 and
increments by 1 again, assigns the new value of 2 to the variable i, and logs 2
to the console. This repeats until i is incremented to and logged at 5 which
triggers the stop condition on the next iteration thereafter. */