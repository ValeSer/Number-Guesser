let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (guess, target) =>
  Math.abs(target - guess);

const compareGuesses = (userGuess, computerGuess, targetNum) =>
  getAbsoluteDistance(userGuess,targetNum) <= getAbsoluteDistance(computerGuess,targetNum);
  


const updateScore = winner => {
  if (winner === 'human') {
      humanScore += 1;
  } else if (winner === 'computer') {
     computerScore += 1;
  }
}

const advanceRound = () => currentRoundNumber += 1;
