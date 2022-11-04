// again.style.display = 'none';
// yt.style.display = 'none';
info1.textContent = '?';
info2.textContent = '?';
info5.textContent = 'vs';

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

        // again.style.display = 'none';
        // controls.style.display = 'block';
        // yt.style.display = 'none';

        // Computer -----------------------------------------------
        let options = ['Rock', 'Paper', 'Scissors'];

        function computerPlay() {
            return options[Math.floor(Math.random() * options.length)];
        };

        let computerSelection = computerPlay();
        playerSelection = button.id;
        info1.textContent = (playerSelection);
        info2.textContent = (computerSelection);
        playRound(playerSelection, computerSelection);
        info3.textContent = ('Round score: ' + [playerScore + ':' + computerScore]);
        
        playerTotal += playerScore;
        computerTotal += computerScore;
        
        
        info4.textContent = ('Total score: ' + [playerTotal + ':' + computerTotal]);
        
        info3a.textContent = ('Player: ' + playerTotal );
        info3b.textContent = ('Computer: ' + computerTotal);





        if (playerTotal == 5 && computerTotal < 5) {
            info6.textContent = ('You win, congratulations!');
            // again.style.display = 'block';
            // controls.style.display = 'none';
            // yt.style.display = 'block';
        }

        if (playerTotal == 5 && computerTotal == 5) {
            info6.textContent = ('Match draw.');
            // again.style.display = 'block';
            // controls.style.display = 'none';
        }

        if (playerTotal < 5 && computerTotal == 5) {
            info6.textContent = ('You lose, Skynet is coming!');
            // again.style.display = 'block';
            // controls.style.display = 'none';
        }

        if (playerTotal == 6 || computerTotal == 6) {
            playerScore = 0;
            computerScore = 0;
            playerTotal = 0;
            computerTotal = 0;

            info1.textContent = '?';
            info2.textContent = '?';

            info3.textContent = ('Round score: ' + [playerScore + ':' + computerScore]);



            info4.textContent = ('Total score: ' + [playerTotal + ':' + computerTotal]);

            info5.textContent = 'vs';
            info6.textContent = '';
        }
    });
});

// Round --------------------------------------------------
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerScore = 1;
        computerScore = 1;
        info5.textContent = 'It\'s a Draw';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        playerScore = 0;
        computerScore = 1;
        info5.textContent = 'Rock lose to Paper';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        playerScore = 0;
        computerScore = 1;
        info5.textContent = 'Paper lose to Scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        playerScore = 0;
        computerScore = 1;
        info5.textContent = 'Scissors lose to Rock';
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
        info5.textContent = 'vs';
    }
}