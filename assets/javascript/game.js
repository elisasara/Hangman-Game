// create an array of animal names
var wordbank = ["tiger", "monkey", "leopard", "gorilla", "elephant", "anaconda"];

// choose a random word from the array
   
window.onload = function() {
    
    var getrandomword = wordbank[Math.floor(Math.random() * wordbank.length)];
    console.log(getrandomword);


// take the length of the word and put that number of dashes into the div #guesstheword

var dash = "";

for (i=0; i <= getrandomword.length; i++) {
    var newdash = "_"
    var fulldash = dash + " " + newdash;
    document.getElementById("guesstheword").innerHTML = fulldash;
}
}

// var randomword = document.getElementById(guesstheword);

// onkeyup take the key that is chosen, make it lowercase

// then display the key that is chosen in div #lettersused

// if that letter is in the word, replace the word in the div to show the letter where it should be (replacing the dash that was there)

// lower the number of guesses left by one div #guessesleft
