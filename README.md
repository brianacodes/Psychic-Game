# Psychic-Game
DU Coding Bootcamp - Homework 3

### Psychic Game Pseudocode
// The theme is inspried from the movie Saw.

1. The apps randomly picks a letter and the player tries to guess which letter the app chose.

2. Text on the page:

    * Theme-based instructions here.

    * "Wins: " >> # of times the player has guessed the mystery letter correctly

    * "Losses: " >> # of times the player has failed to guess the mystery letter correctly after exhausting all guesses.

    * "Guesses Left: " >> # of guesses left. This will update - 
        
        // 1st, decreases by 1 after each guess until there are no guesses left.
        // Then, the game resets and "Guesses Left: " reverts to the starting # of guesses left. 

    * "Your Guesses So Far: " >> the specific letters that the player typed. 
        
        // These letter are displayed until the player either wins or loses.
        // After a win or loss, "Your Guesses So Far: " clears all values.

3. Each time the player wins, increase the "Wins" counter by 1 and restart the game (without a page refresh).

4. Each time the player loses, increase the "Losses" counter by 1 and restart the game (without a page refresh).