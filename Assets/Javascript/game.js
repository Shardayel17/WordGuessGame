
// letters available to choose from
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Assigning variables needed and setting them to appropriate start point
var Victories = 0;
var Defeats = 0;
var Wletters = [];
var RemainingGuesses = 6;
var CGSS = [];
var PGSS = 0;
var CRGSS = "";

// the entire page and all of its related files and components are loaded before the function listed in the onload event handler is executed//
window.onload = function () {
    document.querySelector(".remaininguesses").innerHTML= RemainingGuesses
    document.querySelector(".victory").innerHTML= Victories
//***HOPEFULLY...THIS CODE WILL HAVE THE COMPUTER CHOOSE A RANDOM LETTER FROM THE LENGTH OF THE LETTER OPTIONS ARRAY */
    CRGSS = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    CGSS.push(CRGSS);
    console.log("this is the computer guess",CRGSS)
}


/* THIS CODE IS INTENDED TO ALLOW THE  */
document.onkeyup = function(event) {
var PGSS = event.key;
console.log(PGSS)

Wletters.push(PGSS); /* Incorrect letters are stored and displayed...Hopefully  */
console.log(Wletters)
// document.querySelector(".guesses").innerHTML=PGSS


console.log(RemainingGuesses)
console.log(PGSS===CRGSS)
console.log(PGSS==CRGSS)
//loop that changes victories and defeat scores as user and computer choose letters. 
//HOPEFULLY IF user and computer choose the same letter, then THIS CODE SHOULD ALLOW THE WINS TO increases by 1
if ((PGSS === CRGSS) && (RemainingGuesses > 0)) {
    console.log("here")
    Victories++;
    // Defeats ++;
//     Wletters.length = 0; /*ANY  INCORRECT GUESSES WILL DISPLAY*/
//     CGSS.length = 0; /*COMPUTER LETTERS CHOSEN WILL DISPLAY*/
//     RemainingGuesses = 6; /* USER STILL HAS 6 GUESSES LEFT*/



// /*Computer is choosing a new random letter from letter options array*/
//     var NRCGuess = letterOption[Math.floor(Math.random() * letterOption.length)];
//     CGSS.push(NRCGuess);
document.querySelector(".victory").innerHTML= Victories
}

else if ((PGSS !== CRGSS) && (RemainingGuesses > 0)) {
	RemainingGuesses = RemainingGuesses-1; /* Remaining guesses decrease if user chooses a letter that is different from the random number computer chooses*/
document.querySelector(".remaininguesses").innerHTML= RemainingGuesses

}

else{
	Defeats++;
	RemainingGuesses = 6; /* Remaining guesses decrease if user chooses a letter that is different from the random number computer chooses AND defeats increase by 1*/
}
// else if{ ((UGSS !== CGSS[0]) && (RemainingGuesse = 6; > 0)) {
// RemainingGuesse = RemainingGuesse-1;

// console.log("whats wrong here?");
// }


Wletters.length = 0;
CGSS.length = 0;

/*Computer is choosing a new random letter from letter options array*/
var NRCGuess = letterOption[Math.floor(Math.random() * letterOption.length)];
CGSS.push(NRCGuess);

}
// SO THAT INFO CONNECTS WITH HTML


var html = "<p>Guess the Letter!</p> " +
          "<p>Victories: " + Victories + "</p>" +
          "<p>Defeats: " + Defeats + "</p>" +
          "<p>Number of remaining guesses: " + RemainingGuesses + "</p>" +
		  "<p>Incorrect letters guessed: " + Wletters + "</p>";
		  
// Set the inner HTML contents of the #game div to our html string
 document.querySelector("#game").innerHTML = html;











