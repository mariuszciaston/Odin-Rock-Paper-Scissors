  // Info Board  --------------------------------------------------

  console.log('Let\'s play Rock, Paper, Scissors!');

  const info = document.querySelector('#info');

  const content1 = document.createElement('div');
  content1.classList.add('play');
  content1.textContent = 'Let\'s play Rock, Paper, Scissors!';
  info.appendChild(content1);

  let playAgain = true;

  while (playAgain === true) {

      // Player -------------------------------------------------

      function playerPlay() {
          console.log("Choose: Rock, Paper or Scissors");
          
        //   let playerChoice;

          const content2 = document.createElement('div');
          content2.classList.add('choose');
          content2.textContent = 'Choose: Rock, Paper or Scissors';
          info.appendChild(content2);

          const rock = document.querySelector('#rock');
          const paper = document.querySelector('#paper');
          const scissors = document.querySelector('#scissors');

          rock.addEventListener('click', () => {
              playerChoice = "Rock";
              console.log('Rock');
          });

          paper.addEventListener('click', () => {
              playerChoice = "Paper";
              console.log('Paper');
          });

          scissors.addEventListener('click', () => {
              playerChoice = "Scissors";
              console.log('Scissors');
          });

          
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
          return ('Round score: ' + [playerScore + ':' + computerScore]);
      }

      // Game ---------------------------------------------------

      let playerScore = 0;
      let computerScore = 0;

      let playerTotal = 0;
      let computerTotal = 0;

      game();

      function game() {
          //   for (let i = 1; i <= 5; i++) {

          for (let i = 1; i <= 1; i++) {

              console.log('Round: ' + i);
              // alert('Round: ' + i);

              const playerSelection = playerPlay();
              console.log('Your selection: ' + playerSelection);
              // alert('Your selection: ' + playerSelection);

              const computerSelection = computerPlay();
              console.log('Computer selection: ' + computerSelection);
              // alert('Computer selection: ' + computerSelection);

              const currentRound = playRound(playerSelection, computerSelection);
              console.log(currentRound);
              // alert(currentRound);

              playerTotal += playerScore;
              computerTotal += computerScore;
          }

          console.log('Total score: ' + [playerTotal + ':' + computerTotal]);
          // alert('Total score: ' + [playerTotal + ':' + computerTotal]);

          if (playerTotal > computerTotal) {
              console.log('You win, congratulations!');
              // alert('You win, congratulations!');
          } else if (playerTotal === computerTotal) {
              console.log('Match draw.');
              // alert('Match draw.');
          } else {
              console.log('You lose, Skynet is coming!');
              // alert('You lose, Skynet is coming!');
          }
      }
      playAgain = window.confirm('Do you want to play again?');
  }