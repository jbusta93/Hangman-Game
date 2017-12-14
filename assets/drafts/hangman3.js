//word list
var wordList = [
  "aquarius",
  "sagittarius",
  "leo",
  "scorpio",
  "libra",
  "gemini",
  "aries",
  "pisces",
  "cancer",
  "capricorn",
  "virgo",
  "taurus"];

//This is the random word selected from the list
 var randomWord = "";
//This is the word split into
 var lettersInRandomWord = [];
//number of blank spaces, use for win condition
 var numBlanks = 0;
//array for blanks and selected letters
 var blanksAndFound = [];
//array for wrong letters
 var wrongGuesses = [];
//all letters guessed in game
 var letterGuessed = "";

//Game Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 8;


//global variable for grabbed elements
 var hiddenWord = document.getElementById('hidden-word');
 var picture = document.getElementById('picture');
 var guessesLeft = document.getElementById('guesses-left');
 var winCount = document.getElementById('win-count');
 var resetBtn = document.getElementById('reset-btn');
 var wrongs = document.getElementById('wrong-guesses')

//initializing the game
function getWord() {
  randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(randomWord);
  lettersInRandomWord = randomWord.split("");
  console.log(lettersInRandomWord);
  numBlanks = lettersInRandomWord.length;
  console.log(numBlanks);

  for (var i = 0; i < numBlanks; i++) {
    blanksAndFound.push("_")
    console.log(blanksAndFound);
  }
}

getWord();

function guessletter
