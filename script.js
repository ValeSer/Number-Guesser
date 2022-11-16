let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  }


console.log(generateTarget(9));
console.log(generateTarget(9));

const compareGuesses = (userGuess, computerGuess, targetNum) =>
Math.abs(userGuess - targetNum) <= Math.abs(computerGuess - targetNum)

console.log(compareGuesses(2,3,4));
console.log(compareGuesses(2,2,4));
console.log(compareGuesses(5,3,4));
console.log(compareGuesses(4,3,4));

const updateScore = winner => {
    let humanScore = 0
    let computerScore = 0
    if (winner === 'human') {
      return humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }

  console.log(updateScore('human'));