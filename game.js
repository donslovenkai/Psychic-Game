//VARIABLES - initial defaults


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = []; //Empty array to hold guessed letters
var letterToGuess = 0;



//Array defining letters that the computer will randomly pick.
var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//Defines computerSelect variable to be the randon number generated times alphabetArray length (26).  
var computerSelect = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];

//FUNCTIONS

//Defines newuGuessesLeft to indicate the remaining guesses left. Set the HTML guessesLeft equivilent to the guessesLeft variable; displays result in HTML

var newGuessesLeft = function() {
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};

var newLetterToGuess = function() {
    this.letterToGuess = this.alphabetArray[Math.floor(Math.random() * this.alphabetArray.length)];
};

//Displays guesses user tried
var newGuessesSoFar = function() {
    document.getElementById("guessesSoFar").innerHTML = "Guesses so far: " + guessedLetters;
};

// Function to reset guesses left, total guesses, and guessed letters
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    newLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}


//User presses key, triggering a function to decrement guesses by 1 and convert unicode event to a character string.  
document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //Add new item to the end of the guessedLetters array and return the new number to userGuess and continue.
    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

    //CONDITIONS

    //If the guesses left is more than zero, and if the user guess matches the computer's guess, increment wins by 1 
    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            //Display the result in the HTML and then call the reset function          
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            reset();
        }
        //If there are no more guesses left, increment losses by 1    
    } else if (guessesLeft == 0) {
        losses++;
        ////Display the result in the HTML and then call the reset function 
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        reset();
    }
};
