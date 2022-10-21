const prompt = require("prompt-sync")();

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let points = 0;
let maxNumber = 2;
let correctNumber = true;
let num = Math.floor(Math.random() * maxNumber) + 1;


function guessGame(maxNumber) {
  readline.question("Your name: ", (name) => {
    console.log(`Welcome to the Guessing game ${name}`);
    console.log("Guess the random number within the range below");
    
    
    do {
     
      const guessedNumber = prompt(`Guess a number between 1 and ${maxNumber}: `);
      if (guessedNumber == num) {
        console.log(`You guessed ${guessedNumber} and random number is ${num}`);
        console.log("CORRECT")  
        points++;
        maxNumber++;        
        console.log(`Points: ${points}`);
      } else {
        console.log("INCORRECT");
        console.log(`Random number is ${num}`);
        console.log(`Final Points: ${points}`);
        console.log("Game over!");
        correctNumber = false;
      }
    } while (correctNumber);
    readline.close();
  });
}
guessGame(maxNumber);