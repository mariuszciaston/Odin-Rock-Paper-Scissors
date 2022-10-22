const again = document.createElement("button");
again.classList.add('again');
again.textContent = 'Game Over. Play again?';
restart.appendChild(again);

restart.style.display = 'none';


info1.textContent = 'Your selection:';
info2.textContent = 'Computer selection:';

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

        restart.style.display = 'none';
        controls.style.display = 'block';

        playerSelection = button.id;
        info1.textContent = ('Your selection: ' + playerSelection);
        info2.textContent = ('Computer selection: ' + computerSelection);
        playRound(playerSelection, computerSelection);
        info3.textContent = ('Round score: ' + [playerScore + ':' + computerScore]);
        playerTotal += playerScore;
        computerTotal += computerScore;
        info4.textContent = ('Total score: ' + [playerTotal + ':' + computerTotal]);

        if (playerTotal == 5 && computerTotal < 5) {
            info6.textContent = ('You win, congratulations!');
            restart.style.display = 'block';
            controls.style.display = 'none';

        }

        if (playerTotal == 5 && computerTotal == 5) {
            info6.textContent = ('Match draw.');
            restart.style.display = 'block';
            controls.style.display = 'none';
        }

        if (playerTotal < 5 && computerTotal == 5) {
            info6.textContent = ('You lose, Skynet is coming!');
            restart.style.display = 'block';
            controls.style.display = 'none';
        }

        if (playerTotal == 6 || computerTotal == 6) {
          
            // document.getElementByClassName('again').style.display = 'block';
            // playAgain = window.confirm('Do you want to play again?');
            playerScore = 0;
            computerScore = 0;
            playerTotal = 0;
            computerTotal = 0;

            info1.textContent = 'Your selection:';
            info2.textContent = 'Computer selection:';

            info3.textContent = ('Round score: ' + [playerScore + ':' + computerScore]);
            info4.textContent = ('Total score: ' + [playerTotal + ':' + computerTotal]);

            info5.textContent = '\xa0';
            info6.textContent = '';
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
        info5.textContent = 'It\'s a Draw.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        playerScore = 0;
        computerScore = 1;
        info5.textContent = 'Paper beats Rock';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        playerScore = 0;
        computerScore = 1;
        info5.textContent = 'Scissors beats Paper';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        playerScore = 0;
        computerScore = 1;
        info5.textContent = 'Rock beats Scissors';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore = 1;
        computerScore = 0;
        info5.textContent = 'Rock beats Scissors';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore = 1;
        computerScore = 0;
        info5.textContent = 'Paper beats Rock';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore = 1;
        computerScore = 0;
        info5.textContent = 'Scissors beats Paper';
    } else {
        // info5.textContent = 'Something went wrong.';
        info5.textContent = '\xa0';
    }
}