//Global Variables
//word and image arrays
var library = ["aquarius","sagittarius","leo","scorpio","libra","gemini","aries","pisces","cancer","capricorn","virgo","taurus"];

var hiddenWord = "";


var wins = 0;
  var startCount = document.getElementById('win-count');
  startCount.innerHTML = wins;


var remaining = 8;


var hiddenLetter = [];


var wrongGuess = [];



function startGame() {
  var constellation = document.getElementById('picture')
  hiddenWord = library[Math.floor(Math.random() * library.length)];
  constellation.src = "assets/images/" + hiddenWord + ".jpg";
  var guessCounter = document.getElementById('guesses-left');
  guessCounter.innerHTML = remaining;
  var guessRow = document.getElementById('wrong-guesses');
  guessRow.innerHTML = wrongGuess;
};

function hide() {
  for (var i = 0; i < hiddenWord.length; i++) {
    if (hiddenWord[i]!=="") {
      hiddenLetter[i] = "_";
    } else {
      hiddenLetter[i]=hiddenWord[i];
    }
  }

  // hiddenLetter = [];
  // hiddenLetter.length = hiddenWord.length;
  // hiddenLetter.fill('_');
  // for (var i = 0; i < hiddenWord.length; i++) {
  //     hiddenLetter[i]=hiddenWord[i];
  // };
  var underscore = document.getElementById('hidden-word');
  underscore.innerHTML = hiddenLetter.join(" ");
};

function checkWin(){
  if(!hiddenLetter.includes("_")) {
    var winCount = document.getElementById('win-count');
    winCount.innerHTML = wins += 1;
    var victory = document.getElementById('winSound');
    victory.play();
    var PatStewart = document.getElementById('picture');
    PatStewart.src = "assets/images/win.gif";
    setTimeout(reset, 4800);
  };
};

function resetbtn(){
  var startOver = document.getElementById('reset-btn');
  startOver.innerHTML = "<button class=\"btn btn-dark font-weight-bold\" id=\"btn\" onclick=\"reset()\">Play Again</button>";
};

function reset(){
  hiddenLetter = [];
  hiddenWord = "";
  remaining = 8;
  wrongGuess = [];
  startGame();
  hide();
};

function checkLose(){
  if (remaining===0) {
  var blackhole = document.getElementById('picture');
  blackhole.src = "assets/images/blackhole.jpg";
  var youPlayedYoself = document.getElementById('loseSound');
  youPlayedYoself.play();
  setTimeout(reset, 3000);
  }
};



document.onkeyup = function showLetter() {

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  if (hiddenWord.includes(userGuess)) {
    for (var j = 0; j < hiddenWord.length; j++) {
      if (userGuess===hiddenWord[j]) {
        hiddenLetter[j]=userGuess;

        var goodGuess = document.getElementById('hidden-word');
        goodGuess.innerHTML = hiddenLetter.join(" ");
      }
    }
    checkWin();
  } else if (!wrongGuess.includes(userGuess) && remaining > 0) {
    var remainCount = document.getElementById('guesses-left');
    remainCount.innerHTML = remaining -=1;


    wrongGuess.push(userGuess);
    var wrongLetter = document.getElementById('wrong-guesses');
    wrongLetter.innerHTML = wrongGuess.join(" ");
    checkLose();
  }
};

startGame();
hide();
resetbtn();
