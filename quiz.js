const readline = require('readline-sync');

let name = readline.question("What is your name? ");
console.log(`Hello, ${name}! Let's start the quiz.`);

let answer1 = readline.question("1) What data type stores true or false? ");
let answer2 = readline.question("2) What operator is used to assign a value? ");
let answer3 = readline.question("3) Enter a number: ");
let answer4 = readline.question("4) What keyword declares a variable in JavaScript? ");
let answer5 = readline.question("5) How do you write a single line comment? ");

console.log("\nThanks for your answers:");
console.log(`1) ${answer1}`);
console.log(`2) ${answer2}`);
console.log(`3) ${answer3}`);
console.log(`4) ${answer4}`);
console.log(`5) ${answer5}`);

Output are:
What is your name? John
Hello, John! Let's start the quiz.
1) What data type stores true or false? boolean
2) What operator is used to assign a value? =
3) Enter a number: 42
4) What keyword declares a variable in JavaScript? let
5) How do you write a single line comment? // comment

Thanks for your answers:
1) boolean
2) =
3) 42
4) let
5) // comment

