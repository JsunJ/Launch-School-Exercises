let getName = promptUser => {
  let rlSync = require('readline-sync');
  let input = rlSync.question(promptUser);
  return input;
}

let firstName = getName("What is your first name? ");
let lastName = getName("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);