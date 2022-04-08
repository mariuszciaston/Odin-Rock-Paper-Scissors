// rock vs rock = DRAW
// paper vs paper = DRAW
// scissors vs scissors = DRAW

// rock vs paper = paper = CPU
// paper vs scissors = scissors = CPU
// scissors vs rock = rock = CPU

// rock vs scissors = rock = HUMAN
// paper vs rock = paper = HUMAN
// scissors vs paper = scissors = HUMAN

let options = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return choice = options[Math.floor(Math.random() * options.length)];
};

// let playerSelection = prompt('Rock, paper or scissors ?');
let playerSelection = 'Paper';
// let computerSelection = computerPlay();
let computerSelection = 'Paper';

function playRound() {
    if (playerSelection === computerSelection) {
        console.log('It\'s a Draw.');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log('You Lose! Paper beats Rock');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log('You Lose! Scissors beats Paper');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('You Lose! Rock beats Scissors');
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log('You Win! Rock beats Scissors');
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log('You Win! Paper beats Rock');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('You Win! Scissors beats Paper');
    } else
        console.log('coś nie teges, wielkość liter?');
}

playRound();