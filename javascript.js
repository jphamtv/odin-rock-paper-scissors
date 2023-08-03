
// Initialize the scores
let playerScore = 0;
let computerScore = 0;

// Get elements
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');

const roundWinner = document.getElementById('round-winner');
const gameWinner = document.getElementById('game-winner');

const buttonWrapper = document.querySelector('.button-wrapper');
const gameOverWrapper = document.querySelector('.game-over-wrapper');
const newGameButton = document.getElementById('new-game');

// Set event listeners
rock.addEventListener('click', function (event) {
  game(event.target.id);
});

paper.addEventListener('click', function (event) {
  game(event.target.id);
});

scissors.addEventListener('click', function (event) {
  game(event.target.id);
});


function getPlayerChoice(buttonId) {
  // Player's choice will be the id of the button clicked
  const playerChoice = buttonId;

  // Show the player's choice
  playerChoiceElement.textContent = playerChoice;

  return playerChoice;
}


function getComputerChoice() {
  // Generate a random choice for the computer
  const options = ['rock', 'paper', 'scissors'];

  // Use random index number to choose one of the options
  let randomnumberber = Math.floor(Math.random() * 3);
  let computerChoice = options[randomnumberber];

  // Show the computer's choice
  computerChoiceElement.textContent = computerChoice;

  return computerChoice;
}


function playRound(playerSelection, computerSelection) {
  // Determine the winner of one round
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


function announceWinner(playerScore, computerScore) {
  // Check if game is over and if so, announce the winner
  if (playerScore === 5 || computerScore === 5) {

    // Toggle visibility to announce winner and show Play Again button
    buttonWrapper.style.display = 'none';
    gameOverWrapper.style.display = 'flex';

    if (playerScore > computerScore) {
      return "Congrats! You beat the computer!";
    } else if (computerScore > playerScore) {
      return "The computer wins.";
    } else {
      return "It's a tie. Neither man or machine has won.";
    }
  }
}



function game(buttonId) {
  // Play one round on button click

  // Check if game is over
  if (playerScore === 5 || computerScore === 5) {
    return;
  }

  let playerSelection = getPlayerChoice(buttonId);
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  // Update scores based on the result
  if (result === "You win! Rock beats Scissors!"
    || result === "You win! Paper beats Rock!"
    || result === "You win! Scissors beats Paper") {
    playerScore++;
  } else if (result === "You lose! Paper beats Rock!"
    || result === "You lose! Scissors beats Paper!"
    || result === "You lose! Rock beats Scissors") {
    computerScore++;
  }

  // Check if game is over and if so, announce winner
  let winner = announceWinner(playerScore, computerScore)

  // Show the return text on the element
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  roundWinner.textContent = result;
  gameWinner.textContent = winner;
}


newGameButton.addEventListener('click', function () {
  // Reset the game when Play Again button is clicked

  // Reset scores
  playerScore = 0;
  computerScore = 0;

  // Clear choices and winner announcements
  roundWinner.textContent = '';
  gameWinner.textContent = '';
  playerChoiceElement.textContent = '';
  computerChoiceElement.textContent = '';

  // Toggle visibility to show choice buttons
  buttonWrapper.style.display = 'flex';
  gameOverWrapper.style.display = 'none';

  // Update scoreboard and round displays
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
});