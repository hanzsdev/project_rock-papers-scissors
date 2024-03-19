// Setup random function for computer choice 
// Declare variable to store random computer choice 
// Setup function for player choice
// Setup prompt to take player input
// Declare variable to store player choice
// Setup function taking input from computer and player choice playing one round
// If statements comparing computer and player choice with outcome logged 
// Loops to fix a set 5 rounds and determine winner of the game



function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomOptions = options[Math.floor(Math.random()* options.length)];
    return randomOptions;
}

let computerSelection = getComputerChoice();

let playerChoice  =  (playerInput) => {
    let rock = 'Rock';
    let paper = 'Paper';
    let scissors = 'Scissors';

    let userChoice;

    if (playerInput.toLowerCase() === rock.toLowerCase()) {
        userChoice = 'Rock';
    } else if (playerInput.toLowerCase() === paper.toLowerCase()) {
        userChoice = 'Paper';
    } else  if (playerInput === scissors.toLowerCase()) {
        userChoice = 'Scissors';
    };

    return userChoice;

}

let playerSelection = playerChoice(prompt('Choose between: Rock, Paper or Scissors.',));


function game(playerSelection, computerSelection) {
    let gameResult;
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        gameResult = 1; console.log(`Player wins this round with a hand of ${playerSelection} vs ${computerSelection}`);
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        gameResult = 2; console.log(`Computer wins this round with a hand of ${computerSelection} vs ${playerSelection}`);
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        gameResult = 3; console.log(`It\'s a draw with both hands ${playerSelection} and ${computerSelection}`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        gameResult = 1; console.log(`Player wins this round with a hand of ${playerSelection} vs ${computerSelection}`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        gameResult = 2; console.log(`Computer wins this round with a hand of ${computerSelection} vs ${playerSelection}`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        gameResult = 3; console.log(`It\'s a draw with both hands ${playerSelection} and ${computerSelection}`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        gameResult = 1;console.log(`Player wins this round with a hand of ${playerSelection} vs ${computerSelection}`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        gameResult = 2; console.log(`Computer wins this round with a hand of ${computerSelection} vs ${playerSelection}`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        gameResult = 3; console.log(`It\'s a draw with both hands ${playerSelection} and ${computerSelection}`);
    }
    return gameResult;
}

const gameResult = game(playerSelection, computerSelection);


function gameLoops(gameResult) {
    
    let playerScore = 0 
    let computerScore = 0;
    let rounds = 0;

    

     if (gameResult === 1) {
            playerScore++;
            rounds++;
            console.log(`Player has ${playerScore} points, on round ${rounds}`);
        } else if (gameResult === 2) {
            computerScore++;
            rounds++;
            console.log(`Computer has ${computerScore} points, on round ${rounds}`);
        } else {
            console.log(`game is a tie - lets do a rematch!`);
        }

        playerSelection = playerChoice(prompt('Choose between: Rock, Paper or Scissors.',));
        computerSelection = getComputerChoice();
        gameResult = game(playerSelection, computerSelection);

        if (rounds === 5 && playerScore > computerScore) {
            console.log('Player Wins the game!'); 
        } else if ( rounds === 5 && computerScore > playerScore) {
            console.log('Computer Wins the game!'); 
        } else console.log("The game is a Draw!");

        }

        




gameLoops(gameResult);





