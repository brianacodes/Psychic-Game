// Creates an array that stores all the options (A - Z).
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess;
// // Remember to "label" your console logs. 
// console.log("userGuess is " + userGuess);
var compGuess;
// Create the variables that store the number of wins, losses, and guesses left. Wins & loses start at 0 and increase by 1. Guesses left start at 7 and decrease by 1.
var wins = 0;
var losses = 0;
var guessesLeft = 7;

// Defining the function for selecting the computer's choice.
var setComGuess = function() {
compGuess = letters[Math.floor(Math.random()* letters.length)];
console.log(compGuess);
}
// Declaring the resetGame function for later calls.
function resetGame() {
    setComGuess();
    guessesLeft = 7;
    document.querySelector('#guessesLeft').textContent = guessesLeft;
    document.querySelector("#yourGuesses").textContent = "";
}
// Calling the setComGuess function () declared above. *SCOPE STUFF --> Runs before everything*
setComGuess();

// Function for whenever user presses a key.
document.onkeyup = function(event) {
    // console.log(event);
    // Limiting the userGuess to the letters array using the "includes" array prototype method...what is a prototype IDK, just do it.
    // IF-ELSE SHORTCUT (ONLY ELSE) = RETURNING EARLIER: If inside a function, no code below keyword "return" will run. Remember, the return will only happen if this condition is being met.
    if (!letters.includes(event.key)) return; 
    userGuess = event.key;
    // console.log(userGuess);
    // NOTE: docucment.querySelector = document.getElementById (new version with more options)
    document.querySelector('#yourGuesses').textContent += userGuess;
    guessesLeft--;
    
    document.querySelector('#guessesLeft').textContent = guessesLeft;
    
    console.log('userGuess is ' + userGuess);
    console.log('compGuess is ' + compGuess);

// Win Function
    if (userGuess === compGuess) {
        wins++;
        document.querySelector('#wins').textContent = wins;
       
        // New Computer Choice (fresh batch of)
        resetGame(); 
    }
// Loss Function
    else {
        if (guessesLeft === 0) {
            losses++;
            document.querySelector('#losses').textContent = losses;
            // User has lost and you....
            resetGame();
        }        

    }
}
