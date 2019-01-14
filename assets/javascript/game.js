// Creates an array that stores all the options (A - Z).
var letters = ['a'];
var userGuess = [];
var compGuess = '';
// Create the variables that store the number of wins, losses, and guesses left. Wins & loses start at 0 and increase by 1. Guesses left start at 7 and decrease by 1.
var wins = 0;
var losses = 0;
var guessesLeft = 7;

// Defining the function for selecting the computer's choice.
var setComGuess = function() {
compGuess = letters[Math.floor(Math.random()* letters.length)];
console.log(compGuess);
}

// Function for whenever user presses a key.
document.onkeyup = function(event) {
    // console.log(event);
    userGuess.push(event.key);
    // console.log(userGuess);
    // NOTE: docucment.querySelector = document.getElementById (new version with more options)
    document.querySelector("#yourGuesses").textContent = userGuess;
    guessesLeft--;
    
    document.querySelector('#guessesLeft').textContent = guessesLeft;

// Win Function
    if (userGuess === compGuess) {
        wins++;
        document.querySelector('#wins').textContent = wins;
        // Reset Guesses Left to 7
        guessesLeft = 7;
        
        // New Computer Choice (fresh batch of)
        setComGuess(); 
    }
// Loss Function
    else {
        losses++;
        document.querySelector('losses').textContent = losses;
        guessesLeft = 7;
    }
}
