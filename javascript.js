// Rock, Paper, Scissors Game - Man vs Machine

// This function prompts the player for a choice
function getPlayerChoice() {

  let input = prompt("Rock, Paper, or Scissors?", '');
  
  playerChoice = input.toLowerCase();
    console.log(playerChoice);
    
  return playerChoice;
}

// This function generates the computer's choice
function getComputerChoice() {

  const CHOICES = ['rock', 'paper', 'scissors'];

  // Generate a random number to become the index
  let randomnumberber = Math.floor(Math.random() * 3); 

  let computerChoice = CHOICES[randomnumberber];
    console.log(computerChoice)

  return computerChoice;
}

// This function plays one round of the game
function playRound(playerSelection, computerSelection) {

  // Algorithm to determine who wins one round of the game
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "You win! Rock beats Scissors!";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      return "You lose! Paper beats Rock!";
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
      return "It's a tie.";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      return "You lose! Scissors beats Paper!";
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
      return "It's a tie";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      return "You win! Paper beats Rock!";
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
      return "It's a tie";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      return "You win! Scissors beats Paper";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      return "You lose! Rock beats Scissors";
  }
}

/* This function starts the game, sets the number of rounds to play, 
    and annunces a winner at the end of the game */
function game() {

  let roundsPlayed = 0;
  let playerScore = 0;
  let computerScore = 0;

  // Set the number of rounds to play:
  let numberOfRounds = 5;

  // Loop through the number of rounds determined by 'numberOfRounds' above
  while (roundsPlayed < numberOfRounds) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    roundsPlayed++;
    console.log(result);

    // Increment the winner's score 
    if (result === "You win! Rock beats Scissors!" 
        || result === "You win! Paper beats Rock!" 
        || result === "You win! Scissors beats Paper") {
      playerScore++;
    } else if (result === "You lose! Paper beats Rock!" 
                || result === "You lose! Scissors beats Paper!" 
                || result === "You lose! Rock beats Scissors") {
        computerScore++;
    }
  console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
  }

  // Announce the winner at the end of the game
  if (playerScore > computerScore) {
    console.log("Congrats! You beat the computer!");
  } else if (computerScore > playerScore) {
    console.log("The computer wins.");
  } else {
    console.log("It's a tie. Neither man or machine has won.")
  }
}

// game();