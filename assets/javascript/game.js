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

// var photo = document.getElementById("wordimage")
// var image = document.createElement("img");

// // tells which image to put in the div #wordimage based on the randomword chosen
// if (randomword === "tiger") {
//     image.src = "assets/images/tiger.jpg";
//     photo.appendChild(image);
// }

// if (randomword === "monkey") {
//     image.src = "assets/images/monkey.jpg";
//     photo.appendChild(image);
// }

// if (randomword === "leopard") {
//     image.src = "assets/images/leopard.jpg";
//     photo.appendChild(image);
// }

// if (randomword === "gorilla") {
//     image.src = "assets/images/gorilla.jpg";
//     photo.appendChild(image);
// }

// if (randomword === "anacoda") {
//     image.src = "assets/images/anaconda.jpg";
//     photo.appendChild(image);
// }

// if (randomword === "elephant") {
//     image.src = "assets/images/elephant.jpg";
//     photo.appendChild(image);
// }

function reset() {
    // clears the chosen word array
    var chosenword = [];

    // reset the number of guesses
    var guessesremain = 12;
    document.getElementById("guessesleft").innerHTML = guessesremain;
    // choose a new random word from the array
var randomword = wordbank[Math.floor(Math.random() * wordbank.length)];

for (i = 0; i < randomword.length; i++) {
    chosenword[i] = "_";
    var combine = chosenword.join(" ");
    document.getElementById("guesstheword").innerHTML = combine;
}

}


window.onload = function start() {

    document.getElementById("wins").innerHTML = wincount;
    document.getElementById("guessesleft").innerHTML = guessesremain;

    // take the length of the word and put that number of dashes into a new array and add that to the div #guesstheword

    for (i = 0; i < randomword.length; i++) {
        chosenword[i] = "_";
        var combine = chosenword.join(" ");
        document.getElementById("guesstheword").innerHTML = combine;
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
    document.getElementById("wins").innerHTML = wincount++;
  }

// loss!
if (guessesremain === 0) {
    alert("Sorry, you lost! Click the New Word button to try again.");
}
    }


    // lower the number of guesses left by one div #guessesleft


        // set a notification if the letter has already been guessed

        // set rule for only letters in alphabet to be accepted
    }


    