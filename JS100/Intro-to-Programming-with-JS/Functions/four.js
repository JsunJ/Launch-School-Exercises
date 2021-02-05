function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/* This code logs nothing to the console. The return statement ends the
scream function before the console.log() function runs. */