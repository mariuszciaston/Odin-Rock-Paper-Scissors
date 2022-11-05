// START

endOverlay.style.display = 'none';

let playerScore = 0;
let computerScore = 0;
let playerTotal = 0;
let computerTotal = 0;


playerChoice.textContent = '?';
computerChoice.textContent = '?';
versusBox.textContent = 'vs';

// PLAYER
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (playerTotal < 5 && computerTotal < 5) {

        let playerSelection = button.id;

        if (playerSelection == "Rock") {
            playerChoice.textContent = "✊";
        }
        if (playerSelection == "Paper") {
            playerChoice.textContent = "✋";
        }
        if (playerSelection == "Scissors") {
            playerChoice.textContent = "✌️";
        }

        // COMPUTER 
        let options = ['Rock', 'Paper', 'Scissors'];
        let computerSelection = computerPlay();

        function computerPlay() {
            return options[Math.floor(Math.random() * options.length)];
        };

        if (computerSelection == "Rock") {
            computerChoice.textContent = "✊";
        }
        if (computerSelection == "Paper") {
            computerChoice.textContent = "✋";
        }
        if (computerSelection == "Scissors") {
            computerChoice.textContent = "✌️";
        }

        // ROUND
        playRound(playerSelection, computerSelection);

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                playerScore = 1;
                computerScore = 1;
                versusBox.textContent = 'It\'s a Draw';
            } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
                playerScore = 0;
                computerScore = 1;
                versusBox.textContent = 'Rock lose to Paper';
            } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
                playerScore = 0;
                computerScore = 1;
                versusBox.textContent = 'Paper lose to Scissors';
            } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
                playerScore = 0;
                computerScore = 1;
                versusBox.textContent = 'Scissors lose to Rock';
            } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
                playerScore = 1;
                computerScore = 0;
                versusBox.textContent = 'Rock beats Scissors';
            } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
                playerScore = 1;
                computerScore = 0;
                versusBox.textContent = 'Paper beats Rock';
            } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
                playerScore = 1;
                computerScore = 0;
                versusBox.textContent = 'Scissors beats Paper';
            } else {
                versusBox.textContent = 'ERROR';
            }
        }

        
        playerTotal += playerScore;
        computerTotal += computerScore;
    }



        // if(playerTotal < 5 || computerTotal < 5){
        // }


        playerPoints.textContent = ('Player: ' + playerTotal);
        computerPoints.textContent = ('Computer: ' + computerTotal);



        // VICTORY
        if (playerTotal == 5 && computerTotal < 5) {
            whoWon.textContent = ('You win, congratulations!');
            endOverlay.style.display = 'block';
        }
        if (playerTotal == 5 && computerTotal == 5) {
            whoWon.textContent = ('Match draw.');
            endOverlay.style.display = 'block';
        }
        if (playerTotal < 5 && computerTotal == 5) {
            whoWon.textContent = ('You lose, Skynet is coming!');
            endOverlay.style.display = 'block';
        }


    });

});

// RESTART
playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerTotal = 0;
    computerTotal = 0;
    // endBox.textContent = ('RESTART');

    playerPoints.textContent = ('Player: ' + playerTotal);
    computerPoints.textContent = ('Computer: ' + computerTotal);

    playerChoice.textContent = '?';
    computerChoice.textContent = '?';
    versusBox.textContent = 'vs';

    endOverlay.style.display = 'none';
});


