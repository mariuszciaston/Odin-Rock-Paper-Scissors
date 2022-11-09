// START
start();

function start() {
    endOverlay.style.display = 'none';

    playerScore = 0;
    computerScore = 0;
    playerTotal = 0;
    computerTotal = 0;

    playerPoints.textContent = ('Player: ' + playerTotal);
    computerPoints.textContent = ('Computer: ' + computerTotal);

    playerChoice.textContent = '❔';
    computerChoice.textContent = '❔';
    infoBox.textContent = 'Score 5 points to win';
}
playAgain.addEventListener('click', start);

// PLAYER
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        playerChoice.style.animation = "none"
        playerChoice.offsetHeight;
        // playerChoice.style.animation = ""
        playerChoice.style.animation = "zoom 0.5s"
        
        
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
            }

            playerTotal += playerScore;
            computerTotal += computerScore;
        }

        playerPoints.textContent = ('Player: ' + playerTotal);
        computerPoints.textContent = ('Computer: ' + computerTotal);

        // VICTORY
        if (playerTotal == 5 && computerTotal < 5) {
            whoWon.textContent = ('You won!');
            endOverlay.style.display = 'block';
        }
        if (playerTotal == 5 && computerTotal == 5) {
            whoWon.textContent = ('Match draw.');
            endOverlay.style.display = 'block';
        }
        if (playerTotal < 5 && computerTotal == 5) {
            whoWon.textContent = ('You lost...');
            endOverlay.style.display = 'block';
        }
    });
});