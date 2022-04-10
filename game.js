console.log('Let\'s play Rock, Paper, Scissors!');
alert('Let\'s play Rock, Paper, Scissors!');

let playAgain = true;

while (playAgain === true) {

    // Player -------------------------------------------------

    function playerPlay() {
        console.log("Choose: Rock (1), Paper (2) or Scissors (3)");
        playerChoice = prompt("Choose: Rock (1), Paper (2) or Scissors (3)");

        if (playerChoice.toLowerCase() === "rock" || parseInt(playerChoice) === 1) {
            playerChoice = "Rock";
        } else if (playerChoice.toLowerCase() === "paper" || parseInt(playerChoice) === 2) {
            playerChoice = "Paper";
        } else if (playerChoice.toLowerCase() === "scissors" || parseInt(playerChoice) === 3) {
            playerChoice = "Scissors";
        } else {
            console.log("Wrong selection, please try again");
            alert("Wrong selection, please try again");
            playerPlay();
        }
        return playerChoice;
    }

    // Computer -----------------------------------------------

    let options = ['Rock', 'Paper', 'Scissors'];

    function computerPlay() {
        return options[Math.floor(Math.random() * options.length)];
    };

    // Round --------------------------------------------------

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            playerScore = 1;
            computerScore = 1;
            console.log('It\'s a Draw.');
            alert('It\'s a Draw.');
        } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            playerScore = 0;
            computerScore = 1;
            console.log('Paper beats Rock');
            alert('Paper beats Rock');
        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            playerScore = 0;
            computerScore = 1;
            console.log('Scissors beats Paper');
            alert('Scissors beats Paper');
        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            playerScore = 0;
            computerScore = 1;
            console.log('Rock beats Scissors');
            alert('Rock beats Scissors');
        } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            playerScore = 1;
            computerScore = 0;
            console.log('Rock beats Scissors');
            alert('Rock beats Scissors');
        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            playerScore = 1;
            computerScore = 0;
            console.log('Paper beats Rock');
            alert('Paper beats Rock');
        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            playerScore = 1;
            computerScore = 0;
            console.log('Scissors beats Paper');
            alert('Scissors beats Paper');
        } else {
            console.log('Something went wrong.'); // Shows when user input is incorrect (rock, ROCK, RocK) ...  Can be deleted after playerSelection parameter is made case-insensitive
            alert('Something went wrong.');
        }
        return ('Round score: ' + [playerScore + ':' + computerScore]);
    }

    // Game ---------------------------------------------------

    let playerScore = 0;
    let computerScore = 0;

    let playerTotal = 0;
    let computerTotal = 0;

    game();

    function game() {
        for (let i = 1; i <= 5; i++) {

            console.log('Round: ' + i);
            alert('Round: ' + i);

            const playerSelection = playerPlay();
            console.log('Your selection: ' + playerSelection);
            alert('Your selection: ' + playerSelection);

            const computerSelection = computerPlay();
            console.log('Computer selection: ' + computerSelection);
            alert('Computer selection: ' + computerSelection);

            const currentRound = playRound(playerSelection, computerSelection);
            console.log(currentRound);
            alert(currentRound);

            playerTotal += playerScore;
            computerTotal += computerScore;
        }

        console.log('Total score: ' + [playerTotal + ':' + computerTotal]);
        alert('Total score: ' + [playerTotal + ':' + computerTotal]);

        if (playerTotal > computerTotal) {
            console.log('You win, congratulations!');
            alert('You win, congratulations!');
        } else if (playerTotal === computerTotal) {
            console.log('Match draw.');
            alert('Match draw.');
        } else {
            console.log('You lose, Skynet is coming!');
            alert('You lose, Skynet is coming!');
        }
    }
    playAgain = window.confirm('Do you want to play again?');
}