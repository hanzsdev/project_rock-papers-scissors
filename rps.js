// Setup random function for computer choice 
// Declare variable to store random computer choice 
// Setup function for player choice
// Declare variable to store player choice
// Setup function taking input from computer and player choice
// If statements comparing computer and player choice with outcome 
// Loops to fix a set ammount of rounds to determine winner of the game



function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomOptions = options[Math.floor(Math.random()* options.length)];
    return randomOptions;
}

const computerChoice = getComputerChoice();
