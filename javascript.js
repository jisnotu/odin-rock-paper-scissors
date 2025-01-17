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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  // PSEUDOCODE for function `playGame()`:
  // Repeat the following until 5 valid rounds are played:
    // Play a round. If there's a valid choice, show number of rounds played and score and
    // increment "valid rounds played" counter.
    // If there isn't a valid choice, don't increment counter.
  let numValidRounds = 0;
  while (numValidRounds < 5) {
    let isValidRound = playRound(getHumanChoice(), getComputerChoice());
    if (isValidRound) {
      numValidRounds++;
    }
    console.log(`Rounds Played: ${numValidRounds} / 5
Computer: ${computerScore}
Human: ${humanScore}`);
  }
  
  // Once 5 valid rounds are played, compare human's score to computer's score.
  // Display winner.
  if (computerScore > humanScore) {
    console.log(`The computer won!`);
  }
  else if (humanScore > computerScore) {
    console.log(`You won!`);
  }
  else { // humanScore == computerScore
    console.log(`You and the computer tied!`);
  }

  // PSEUDOCODE for function `playRound()`:
  // Given the human's choice and the computer's choice...
  function playRound(humanChoice, computerChoice) {
    // Convert human's choice to all lowercase.
    humanChoice = humanChoice.toLowerCase();

    // Verify if the human's choice is a valid choice.
    switch (humanChoice) {
      // If it's valid, keep going.
      case "rock":
      case "paper":
      case "scissors":
        break;
      // If it's not valid, then write a message in the console that says so and stop.
      default:
        console.log(`Invalid choice; no winner.`);
        // Return false, as it was an invalid round.
        return false;
    }
    
    // Compare the human's choice to the computer's choice.
    // If they're equal, write a tie message in the console and don't increment either score.
    if (humanChoice === computerChoice) {
      console.log(`You both chose ${computerChoice}. It's a tie!`);
      // Return true, as it was a valid round.
      return true;
    }
    // If they're different, write whether the human won or lost and increment the appropriate player's score.
    if (humanChoice === "rock") {
      switch (computerChoice) {
        case "paper":
          console.log(`Rock loses to paper. You lost!`);
          computerScore++;
          // Return true, as it was a valid round.
          return true;
        case "scissors":
          console.log(`Rock beats scissors. You won!`)
          humanScore++;
          // Return true, as it was a valid round.
          return true;
        default:
          console.log(`Uh oh. You're not supposed to reach this part of the code.`);
          // Return false, as it was an invalid round.
          return false;
      }
    }
    else if (humanChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          console.log(`Paper beats rock. You won!`);
          humanScore++;
          // Return true, as it was a valid round.
          return true;
        case "scissors":
          console.log(`Paper loses to scissors. You lost!`)
          computerScore++;
          // Return true, as it was a valid round.
          return true;
        default:
          console.log(`Uh oh. You're not supposed to reach this part of the code.`);
          // Return false, as it was an invalid round.
          return false;
      }
    }
    else { // humanChoice === "scissors"
      switch (computerChoice) {
        case "rock":
          console.log(`Scissors loses to rock. You lost!`);
          computerScore++;
          // Return true, as it was a valid round.
          return true;
        case "paper":
          console.log(`Scissors beats paper. You won!`)
          humanScore++;
          // Return true, as it was a valid round.
          return true;
        default:
          console.log(`Uh oh. You're not supposed to reach this part of the code.`);
          // Return false, as it was an invalid round.
          return false;
      }
    }
  }
}

