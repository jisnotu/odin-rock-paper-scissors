// PSEUDOCODE for function `getComputerChoice()`:
// Generate a random number x within a range.
// If x is within the first third of the range, return rock.
// If x is within the second third of the range, return paper.
// If x is within the last third of hte range, return scissors.

function getComputerChoice() {
  // Set randomNumber to an integer between 0 and 2, inclusive.
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "something has gone terribly wrong.";
  }
}

// PSEUDOCODE for function `getHumanChoice()`:
// Ask user to enter "rock", "paper", or "scissors".
// Return what the user entered.

function getHumanChoice() {
  return prompt("Enter 'rock', 'paper', or 'scissors'.");
}