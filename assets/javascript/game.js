// create an array of animal names
var wordbank = ["tiger", "monkey", "leopard", "gorilla", "elephant", "anaconda"];
var wins = 0;
var guessesleft = 15;
var lettersguessed = [];
var randomword = wordbank[Math.floor(Math.random() * wordbank.length)];
console.log(randomword);
var chosenword = [];
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// choose a random word from the array

window.onload = function start () {

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("guessesleft").innerHTML = guessesleft;
    console.log(randomword.length);

    // take the length of the word and put that number of dashes into the div #guesstheword

    for (i = 0; i < randomword.length; i++) {
        var gameword = document.getElementById("guesstheword");
        gameword.innerHTML += "_" + " ";
        // var wordtext = gameword.innerHTML;
    }

    // move the word as dashes into a new array so it can be referenced later
    chosenword.push(gameword.innerHTML);
    console.log(chosenword);
}



document.onkeyup = function playgame () {
// onkeyup take the key that is chosen, make it lowercase
    var playerguess = event.key.toLowerCase();
    console.log(playerguess);

// then display the key that is chosen in div #lettersused

    lettersguessed.push(playerguess);
    console.log(lettersguessed);

    document.getElementById("lettersused").innerHTML += playerguess + " ";

// clear the contents of div guesstheword
    var gameword = document.getElementById("guesstheword");
    // gameword.innerHTML = "";

// if that letter is in the word, replace the word in the div to show the letter where it should be (replacing the dash that was there)
        for (i = 0; i < randomword.length; i++) {

        if (playerguess === randomword[i]) {

            var wordtext = gameword.innerHTML;

            //pull the word from the new array chosenword and at the character index replace the dash with the letter
            var updatedword = chosenword[0].replace(chosenword[0].charAt(i), playerguess);
            console.log(updatedword);
            // resets the array
            chosenword = [];
            // fills the array with the new word
            chosenword.push(updatedword);
            //updates the html with the new word in the array
            gameword.innerHTML = chosenword[0];
        }
        // else {
        //     gameword.innerHTML += "_" + " ";
        // }

    }
    }








// lower the number of guesses left by one div #guessesleft
