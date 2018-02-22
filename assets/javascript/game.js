// create an array of animal names
var wordbank = ["tiger", "monkey", "leopard", "gorilla", "elephant", "anaconda"];

// create other needed variables and arrays
var wincount = 0;
var guessesremain = 12;
var lettersguessed = [];
var chosenword = [];
console.log(chosenword);
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// choose a random word from the array
var randomword = wordbank[Math.floor(Math.random() * wordbank.length)];
console.log(randomword);

// when the html button is clicked this function will run to start a new word
function reset() {
    // clear the chosenword array
    chosenword.length = 0;
    console.log(chosenword);

    // clear letters already chosen from array
    lettersguessed.length = 0;
    document.getElementById("lettersused").innerHTML = lettersguessed

    // reset the number of guesses
    var guessesremain = 12;
    document.getElementById("guessesleft").innerHTML = guessesremain;

    // choose a new random word from the array
    var randomword = wordbank[Math.floor(Math.random() * wordbank.length)];
    console.log(randomword);

    // display the new word as dashes in the guesstheword div
    for (i = 0; i < randomword.length; i++) {
        chosenword[i] = "_";
        var combine = chosenword.join(" ");
        document.getElementById("guesstheword").innerHTML = combine;
    }

    // remove photo from previous game
    document.getElementById("wordimage").innerHTML = "";


}

// // the main function
function start() {

//     //display the current wincount and number of guesses remaining
    document.getElementById("wins").innerHTML = wincount;
    document.getElementById("guessesleft").innerHTML = guessesremain;

//     // take the length of the randomword and put that number of dashes into a new array and add that to the div #guesstheword

    for (i = 0; i < randomword.length; i++) {
        chosenword[i] = "_";
        var combine = chosenword.join(" ");
        document.getElementById("guesstheword").innerHTML = combine;
    }
}

document.onkeyup = function playgame() {

    // onkeyup take the key that is chosen, make it lowercase
    var playerguess = event.key.toLowerCase();
    console.log(playerguess);

    // determine if that key is a letter and if it has already been guessed.
    if (alphabet.indexOf(playerguess) !== -1 && lettersguessed.indexOf(playerguess) === -1) {

        // if it is a letter and has not yet been guessed the lower the number of guesses remaining by one.
        guessesremain--;
        document.getElementById("guessesleft").innerHTML = guessesremain;

        // add that letter to the array of lettersguessed
        lettersguessed.push(playerguess);
        console.log(lettersguessed);

        //add to the html of the div letters used so the user can see what letters they have guessed so far.
        document.getElementById("lettersused").innerHTML += playerguess + " ";
    }

    // if playerguess is in the word, replace the word in the array to include the letter where it should be (replacing the dash that was there)
    for (i = 0; i < randomword.length; i++) {

        if (playerguess === randomword[i]) {

            chosenword[i] = playerguess;
            console.log(chosenword[i]);
            var combine = chosenword.join(" ");
            document.getElementById("guesstheword").innerHTML = combine;
        }
    }


    // convert the chosenword array into a string to determine if the player wins.
    var chosenwordstring = chosenword.toString();

    // if the string does not consist of any dashes do the following
    if (chosenword.indexOf("_") === -1) {

        //increase the wincount by 1
        wincount++;
        document.getElementById("wins").innerHTML = wincount;

        // display the appropriate photo based on the word
        if (randomword === "tiger") {
            document.getElementById("wordimage").innerHTML = "<img src='assets/images/tiger.jpg'>";
        }
        else if (randomword === "monkey") {
            document.getElementById("wordimage").innerHTML = "<img src='assets/images/monkey.jpg'>";
        }
        else if (randomword === "leopard") {
            document.getElementById("wordimage").innerHTML = "<img src='assets/images/leopard.jpg'>";
        }
        else if (randomword === "gorilla") {
            document.getElementById("wordimage").innerHTML = "<img src='assets/images/gorilla.jpg'>";
        }
        else if (randomword === "elephant") {
            document.getElementById("wordimage").innerHTML = "<img src='assets/images/elephant.jpg'>";
        }
        else if (randomword === "anaconda") {
            document.getElementById("wordimage").innerHTML = "<img src='assets/images/anaconda.jpg'>";
        }

        guessesremain = 12;

    }

    // if the player runs out of guesses
    if (guessesremain === 0) {

        //show an alert directing them to hit the "new word" button
        alert("Sorry, you lost! Click the New Word button to try again.");

        guessesremain = 12;

    }

}
