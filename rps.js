// Setup random function for computer choice 
// Declare variable to store random computer choice 
// Setup function for player choice
// Setup prompt to take player input
// Declare variable to store player choice
// Setup function taking input from computer and player choice playing one round
// If statements comparing computer and player choice with outcome logged 
// Loops to fix a set 5 rounds andd determine winner of the game



function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomOptions = options[Math.floor(Math.random()* options.length)];
    return randomOptions;
}

const computerSelection = getComputerChoice();

let playerChoice  =  (playerInput) => {
    let rock = 'Rock';
    let paper = 'Paper';
    let scissors = 'Scissors';

    if (playerInput.toLowerCase() === rock.toLowerCase()) {
        playerChoice = 'Rock';
    } else if (playerInput.toLowerCase() === paper.toLowerCase()) {
        playerChoice = 'Paper';
    } else  if (playerInput === scissors.toLowerCase()) {
        playerChoice = 'Scissors';
    };

    return playerChoice;

}

playerChoice(prompt('Choose between: Rock, Paper or Scissors.',));
playerSelection = playerChoice;


function game(playerSelection, computerSelection) {

    let gameResult;

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        gameResult = 1; console.log('Player wins');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        gameResult = 2; console.log('Computer wins');
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        gameResult = 3; console.log('It\'s a draw');
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        gameResult = 1; console.log('Player wins');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        gameResult = 2; console.log('Computer wins');
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        gameResult = 3; console.log('It\'s a draw');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        gameResult = 1;console.log('Player wins');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        gameResult = 2; console.log('Computer wins');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        gameResult = 3; console.log('It\'s a draw');
    }
    return gameResult;

}

gameResult = game(playerSelection, computerSelection);
console.log(gameResult)







