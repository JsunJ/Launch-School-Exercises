let rlSync = require('readline-sync');

let currentAge = Number(rlSync.question('How old are you?\n'));

console.log(`You are ${currentAge} years old.`);
/* 
console.log(`In 10 years, you will be ${currentAge + 10} years old.`);
console.log(`In 20 years, you will be ${currentAge + 20} years old.`);
console.log(`In 30 years, you will be ${currentAge + 30} years old.`);
console.log(`In 40 years, you will be ${currentAge + 40} years old.`);
*/

for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${currentAge + i} years old.`);
}