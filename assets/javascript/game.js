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


function reset() {
    // clears the chosen word array
    chosenword.length = 0;

    // clears letters already chosen from array
    lettersguessed.length = 0;
    document.getElementById("lettersused").innerHTML = lettersguessed

    // reset the number of guesses
    var guessesremain = 12;
    document.getElementById("guessesleft").innerHTML = guessesremain;
    // choose a new random word from the array
var randomword = wordbank[Math.floor(Math.random() * wordbank.length)];
console.log(randomword);

for (i = 0; i < randomword.length; i++) {
    chosenword[i] = "_";
    var combine = chosenword.join(" ");
    document.getElementById("guesstheword").innerHTML = combine;
}

}


function start() {
    document.getElementById("wins").innerHTML = wincount;
    document.getElementById("guessesleft").innerHTML = guessesremain;

    // take the length of the word and put that number of dashes into a new array and add that to the div #guesstheword

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

        // then display the key that is chosen in div #lettersused

        lettersguessed.push(playerguess);
        console.log(lettersguessed);
        document.getElementById("lettersused").innerHTML += playerguess + " ";
        
        // lower the number of guesses remaining by one
            guessesremain--;
            document.getElementById("guessesleft").innerHTML = guessesremain;
   

        // if playerguess is in the word, replace the word in the array to include the letter where it should be (replacing the dash that was there)
        for (i = 0; i < randomword.length; i++) {

            if (playerguess === randomword[i]) {

                chosenword[i] = playerguess;
                console.log(chosenword[i]);
                var combine = chosenword.join(" ");
                document.getElementById("guesstheword").innerHTML = combine;
            }
            console.log(combine);
        }
                      // win!
  var chosenwordstring = chosenword.toString();
  if (chosenword.indexOf("_") === -1) {
      wincount++;
    document.getElementById("wins").innerHTML = wincount;
  }

// loss!
if (guessesremain === 0) {
    alert("Sorry, you lost! Click the New Word button to try again.");
}
    }
    






// set rule for no more guesses after game is won or lost until button clicked
// set rule for only letters in alphabet array to be accepted
// set rule so that a letter cannot be counted as a guess twice