let allMatches = (arr, regex) => {
  let arrOfMatches = []

  arr.forEach(element => {
    if (regex.test(element)) {
      arrOfMatches.push(element);
    }
  });

  return arrOfMatches;
};

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']