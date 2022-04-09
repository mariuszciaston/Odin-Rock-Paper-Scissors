// Player -------------------------------------------------

function playerPlay() {
    console.log("Choose: Rock (1), Paper (2) or Scissors (3)");
    let playerChoice = prompt("Choose: Rock (1), Paper (2) or Scissors (3)");
    if (playerChoice.toLowerCase() === "rock" || parseInt(playerChoice) === 1) {
        playerChoice = "Rock";
    } else if (playerChoice.toLowerCase() === "paper" || parseInt(playerChoice) === 2) {
        playerChoice = "Paper";
    } else if (playerChoice.toLowerCase() === "scissors" || parseInt(playerChoice) === 3) {
        playerChoice = "Scissors";
    } else {
        alert("Wrong selection, please try again");
        playerPlay();
    }
    return playerChoice;
}

const playerSelection = playerPlay();
console.log('Your selection: ' + playerSelection);
alert('Your selection: ' + playerSelection);

// Computer -----------------------------------------------

let options = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
};

const computerSelection = computerPlay();
console.log('Computer selection: ' + computerSelection);
alert('Computer selection: ' + computerSelection);

// Round --------------------------------------------------

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ('It\'s a Draw.');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return ('You Lose! Paper beats Rock');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return ('You Lose! Scissors beats Paper');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return ('You Lose! Rock beats Scissors');
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return ('You Win! Rock beats Scissors');
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return ('You Win! Paper beats Rock');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return ('You Win! Scissors beats Paper');
    } else
        return ('Something went wrong.'); // Shows when user input is incorrect (rock, ROCK, RocK) ...  Can be deleted after playerSelection parameter is made case-insensitive
}

console.log(playRound(playerSelection, computerSelection));
alert(playRound(playerSelection, computerSelection));

// Game ---------------------------------------------------

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.