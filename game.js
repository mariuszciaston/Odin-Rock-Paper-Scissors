// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

// Info Board  --------------------------------------------------

// console.log('Let\'s play Rock, Paper, Scissors!');
// console.log("Choose: Rock, Paper or Scissors");




// const content1 = document.createElement('div');
// content1.classList.add('play');
// info.appendChild(content1);
// const info1 = document.querySelector('#info1');

info1.textContent = 'Choose:';

// Player -------------------------------------------------
let playerScore = 0;
let computerScore = 0;
let playerTotal = 0;
let computerTotal = 0;

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
    
playerSelection = button.id;

    // console.log('Your selection: ' + playerSelection);
    info1.textContent = ('Your selection: ' + playerSelection);

        // console.log('Computer selection: ' + computerSelection);
        info2.textContent = ('Computer selection: ' + computerSelection);

        playRound(playerSelection, computerSelection);

        // console.log ('Round score: ' + [playerScore + ':' + computerScore]);
        info3.textContent = ('Round score: ' + [playerScore + ':' + computerScore]);

        playerTotal += playerScore;
        computerTotal += computerScore;
        // console.log('Total score: ' + [playerTotal + ':' + computerTotal]);
        info4.textContent = ('Total score: ' + [playerTotal + ':' + computerTotal]);

        if (playerTotal == 5  && computerTotal < 5) {
             console.log('You win, congratulations!');
            info5.textContent = ('You win, congratulations!');
        }
    
         if (playerTotal == 5 && computerTotal == 5) {
             console.log('Match draw.');
            info5.textContent = ('Match draw.');
        } 
    
         if (playerTotal < 5  && computerTotal == 5){
             console.log('You lose, Skynet is coming!');
            info5.textContent = ('You lose, Skynet is coming!');
        }

        if (playerTotal == 5 || computerTotal == 5) {
            
            playAgain = window.confirm('Do you want to play again?')

            playerScore = 0;
            computerScore = 0;
            playerTotal = 0;
            computerTotal = 0;
            
            info3.textContent = ('Round score: ' + [playerScore + ':' + computerScore]);
            info4.textContent = ('Total score: ' + [playerTotal + ':' + computerTotal]);


            info1.textContent = 'Choose:';
             info2.textContent = '';

            
             info5.textContent = '';
        

        }
  });
});

// Computer -----------------------------------------------
let options = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
};

let computerSelection = computerPlay();


// Round --------------------------------------------------
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerScore = 1;
        computerScore = 1;
        console.log('It\'s a Draw.');
        // info4.textContent = ('It\'s a Draw.');
        // alert('It\'s a Draw.');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        playerScore = 0;
        computerScore = 1;
        console.log('Paper beats Rock');
        // alert('Paper beats Rock');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        playerScore = 0;
        computerScore = 1;
        console.log('Scissors beats Paper');
        // alert('Scissors beats Paper');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        playerScore = 0;
        computerScore = 1;
        console.log('Rock beats Scissors');
        // alert('Rock beats Scissors');
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore = 1;
        computerScore = 0;
        console.log('Rock beats Scissors');
        // alert('Rock beats Scissors');
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore = 1;
        computerScore = 0;
        console.log('Paper beats Rock');
        // alert('Paper beats Rock');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore = 1;
        computerScore = 0;
        console.log('Scissors beats Paper');
        // alert('Scissors beats Paper');
    } else {
        console.log('Something went wrong.'); // Shows when user input is incorrect (rock, ROCK, RocK) ...  Can be deleted after playerSelection parameter is made case-insensitive
        // alert('Something went wrong.');
    }
}