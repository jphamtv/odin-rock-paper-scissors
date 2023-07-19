// Rock, Paper, Scissors Game - Man vs Machine

function getPlayerChoice() {

  // Prompt user for a choice
  let input = prompt("Rock, Paper, or Scissors?", '');
  
  // Convert input to lowercase
  playerChoice = input.toLowerCase();
    console.log(playerChoice);
    
  return playerChoice;
}

function getComputerChoice() {

  // Declare the list of choices for the computer
  const choices = ['rock', 'paper', 'scissors'];

  // Generate a random number to become the index
  let randomNumber = Math.floor(Math.random() * 3); 

  // Select the choice based on the random number generated
  let computerChoice = choices[randomNumber];
    console.log(computerChoice)

  return computerChoice;
}

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

function game() {

  // Declare variables
  let numOfRounds = 0;
  let playerScore = 0;
  let computerScore = 0;

  // Play 5 rounds of the game
  while (numOfRounds < 5) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    numOfRounds++;
    console.log(result);

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

  // At the end of 5 rounds, determine the winner of the game
  if (playerScore > computerScore) {
    console.log("Congrats! You beat the computer!");
  } else if (computerScore > playerScore) {
    console.log("The computer wins.");
  } else {
    console.log("It's a tie. Neither man or machine has won.")
  }
}

game();