// Setup random function for computer choice 
// Declare variable to store random computer choice 
// Setup function for player choice
// Setup prompt to take player input
// Declare variable to store player choice
// Setup function taking input from computer and player choice
// If statements comparing computer and player choice with outcome 
// Loops to fix a set ammount of rounds to determine winner of the game



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

playerChoice(prompt('Choose your hand',));

playerSelection = playerChoice;
console.log(playerSelection);




