let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  }


console.log(generateTarget(9));
console.log(generateTarget(9));

const compareGuesses = (userGuess, computerGuess, targetNum) => {
    if (Math.abs(userGuess - targetNum) <= Math.abs(computerGuess - targetNum)) {
      return true;
    } else {
        return false;
      }
  }