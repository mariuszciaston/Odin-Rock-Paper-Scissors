/* eslint-disable linebreak-style */

let playerScore = 0;
let computerScore = 0;
let playerTotal = 0;
let computerTotal = 0;
let playerSelection = '';
let computerSelection = '';

const buttons = document.querySelectorAll('.btn');
const infoBox = document.querySelector('#infoBox');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#computerPoints');
const endOverlay = document.querySelector('#endOverlay');
const endBox = document.querySelector('#endBox');
const whoWon = document.querySelector('#whoWon');
const playAgain = document.querySelector('#playAgain');

infoBox.textContent = 'Score 5 points to win';
playerChoice.textContent = '❔';
computerChoice.textContent = '❔';
playerPoints.textContent = (`Player: ${playerTotal}`);
computerPoints.textContent = (`Computer: ${computerTotal}`);
endOverlay.style.display = 'none';

// PLAYER
function playerPlay(e) {
  playerSelection = e.target.id;

  if (playerSelection === 'Rock') {
    playerChoice.textContent = '✊';
  }
  if (playerSelection === 'Paper') {
    playerChoice.textContent = '✋';
  }
  if (playerSelection === 'Scissors') {
    playerChoice.textContent = '✌️';
  }
  playerChoice.style.animation = 'none';
  playerChoice.offsetHeight;
  playerChoice.style.animation = 'punch 0.5s';
}

// COMPUTER
function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors'];
  computerSelection = options[Math.floor(Math.random() * options.length)];

  if (computerSelection === 'Rock') {
    computerChoice.textContent = '✊';
  }
  if (computerSelection === 'Paper') {
    computerChoice.textContent = '✋';
  }
  if (computerSelection === 'Scissors') {
    computerChoice.textContent = '✌️';
  }
  computerChoice.style.animation = 'none';
  computerChoice.offsetHeight;
  computerChoice.style.animation = 'fadein 0.1s';
}
// ROUND
function playRound() {
  if (playerSelection === computerSelection) {
    playerScore = 1;
    computerScore = 1;
    infoBox.textContent = 'It\'s a Draw';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    playerScore = 0;
    computerScore = 1;
    infoBox.textContent = 'Rock lose to Paper';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    playerScore = 0;
    computerScore = 1;
    infoBox.textContent = 'Paper lose to Scissors';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    playerScore = 0;
    computerScore = 1;
    infoBox.textContent = 'Scissors lose to Rock';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerScore = 1;
    computerScore = 0;
    infoBox.textContent = 'Rock beats Scissors';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerScore = 1;
    computerScore = 0;
    infoBox.textContent = 'Paper beats Rock';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerScore = 1;
    computerScore = 0;
    infoBox.textContent = 'Scissors beats Paper';
  } else {
    infoBox.textContent = 'ERROR';
  }
  playerTotal += playerScore;
  computerTotal += computerScore;
  playerPoints.textContent = (`Player: ${playerTotal}`);
  computerPoints.textContent = (`Computer: ${computerTotal}`);
}

// GAME OVER
function gameOver() {
  whoWon.textContent = '';

  if (playerTotal === 5 && computerTotal < 5) {
    whoWon.textContent = ('You won!');
  }
  if (playerTotal === 5 && computerTotal === 5) {
    whoWon.textContent = ('Match draw.');
  }
  if (playerTotal < 5 && computerTotal === 5) {
    whoWon.textContent = ('You lost...');
  }
}

function overlayFade() {
  if (whoWon.textContent) {
    endOverlay.style.display = 'block';
    playerChoice.style.animation = 'none';
    computerChoice.style.animation = 'none';
    endOverlay.style.animation = 'appear 1s forwards';
    endBox.style.animation = 'fadein 1s forwards';
  }
  endOverlay.addEventListener('click', () => {
    endBox.style.animation = 'fadeout 1s forwards';
    endOverlay.style.animation = 'disappear 1s forwards';
  });
}

function restart() {
  playerScore = 0;
  computerScore = 0;
  playerTotal = 0;
  computerTotal = 0;
  playerSelection = '';
  computerSelection = '';

  infoBox.textContent = 'Score 5 points to win';
  playerChoice.textContent = '❔';
  computerChoice.textContent = '❔';
  playerPoints.textContent = (`Player: ${playerTotal}`);
  computerPoints.textContent = (`Computer: ${computerTotal}`);
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (playerTotal < 5 && computerTotal < 5) {
      playerPlay(e);
      computerPlay();
      playRound();
    }
    gameOver();
    overlayFade();
    playAgain.addEventListener('click', restart);
  });
});
