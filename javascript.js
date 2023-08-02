
let currentRound = 1;
let playerScore = 0;
let computerScore = 0;

const currentRoundElement = document.getElementById('current-round');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', function(event) {
  game(event.target.id);
});

paper.addEventListener('click', function(event) {
  game(event.target.id);
});

scissors.addEventListener('click', function(event) {
  game(event.target.id);
});

function getPlayerChoice(buttonId) {
  const playerChoice = buttonId;
  console.log(playerChoice);
  return playerChoice;
}

// Generate the computer's choice
function getComputerChoice() {

  const options = ['rock', 'paper', 'scissors'];

  // Generate a random number for the index
  let randomnumberber = Math.floor(Math.random() * 3); 

  let computerChoice = options[randomnumberber];

  console.log(computerChoice)

  return computerChoice;
}

// Play one round of the game
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

/* Play a round on button click, and annunces a 
    winner at the end of the game */
function game(buttonId) {
  let playerSelection = getPlayerChoice(buttonId);
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  currentRound++;
  console.log(result);

  // Update scores based on result
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
  currentRoundElement.textContent = currentRound;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  
  // Check if game is over and if so, announce winner
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      console.log("Congrats! You beat the computer!");
    } else if (computerScore > playerScore) {
      console.log("The computer wins.");
    } else {
      console.log("It's a tie. Neither man or machine has won.")
    }  
  }
}
