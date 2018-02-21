// create an array of animal names
var wordbank = ["tiger", "monkey", "leopard", "gorilla", "elephant", "anaconda"];

// create other needed variables and arrays
var wincount = 0;
var guessesremain = 12;
var lettersguessed = [];
var chosenword = [];
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


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


window.onload = function start() {

    document.getElementById("wins").innerHTML = wincount;
    document.getElementById("guessesleft").innerHTML = guessesremain;
    console.log(randomword.length);



    // take the length of the word and put that number of dashes into a new array and add that to the div #guesstheword

    for (i = 0; i < randomword.length; i++) {
        chosenword[i] = "_";
        var combine = chosenword.join(" ");
        document.getElementById("guesstheword").innerHTML = combine;
    }

    onkeyup = function playgame() {
        // onkeyup take the key that is chosen, make it lowercase
        var playerguess = event.key.toLowerCase();
        console.log(playerguess);

        // then display the key that is chosen in div #lettersused

        lettersguessed.push(playerguess);
        console.log(lettersguessed);

        document.getElementById("lettersused").innerHTML += playerguess + " ";

        // if playerguess is in the word, replace the word in the array to include the letter where it should be (replacing the dash that was there)
        for (i = 0; i < randomword.length; i++) {

            if (playerguess === randomword[i]) {

                chosenword[i] = playerguess;
                console.log(chosenword[i]);
                var combine = chosenword.join(" ");
                document.getElementById("guesstheword").innerHTML = combine;
            }
        }
    // lower the number of guesses left by one div #guessesleft
    document.getElementById("guessesleft").innerHTML = guessesremain -1;

        

        if (chosenword[i] !== "_") {
                // when the word is complete add one to the win total
            document.getElementById("wins").innerHTML = wincount++;

            // display a photo of the animal and play a sound if word guessed
            // photo.style.display = "block";
        }

            // if guesses left equals zero let the user know they have lost and start the reset function


        // set a notification if the letter has already been guessed

        // set rule for only letters in alphabet to be accepted

    }
}

    // reset game for new word
function reset() {
    // choose a new random word from the array
var randomword = wordbank[Math.floor(Math.random() * wordbank.length)];

return start ();


}








