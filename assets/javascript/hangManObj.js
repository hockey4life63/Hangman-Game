var permLog = document.getElementById("gameLog");
var log = document.getElementById("lastLog");
var swingAnimation = window.setInterval(function(){
			swingArt();
		}, 4000);
var hangManObj = new Object();
//string of all guessed letters
hangManObj.guessedLetters = "";
hangManObj.maxGuess =8;
hangManObj.totalGuess =0;
hangManObj.totalMisses =0;
hangManObj.totalWins = 0;
hangManObj.alphabet = "abcdefghijklmnopqrstuvwxyz"
// bool for if won or lost
hangManObj.won;
//word list
hangManObj.words = [ "fallout", "mass effect","tron", "donkey kong","golden eye"];
hangManObj.compWord
hangManObj.loadUp = new Audio("assets/sounds/pageLoadSound.wav");
hangManObj.onGameStart = new Audio("assets/sounds/gameStartSound.wav");
hangManObj.gameWin = new Audio("assets/sounds/gameWinSound.wav");
hangManObj.gameLose = new Audio("assets/sounds/gameLoseSound.wav")
hangManObj.newWord = function(){
	hangManObj.compWord = hangManObj.words[Math.floor(Math.random()*hangManObj.words.length)]
}
hangManObj.updateStats = function(){
	document.getElementById("missCount").innerHTML = hangManObj.maxGuess-hangManObj.totalMisses;
	document.getElementById("guessCount").innerHTML = hangManObj.totalGuess;
	$("#winCount").html(hangManObj.totalWins)
}
hangManObj.art = [ 
'<pre>_________</pre>\
<pre>|       |</pre> \
<pre>|</pre>\
<pre>|</pre>\
<pre>|</pre>\
<pre>|</pre>\
<pre>|</pre>',

"<pre>_________</pre>\
<pre>|       |</pre>\
<pre>|       O</pre>\
<pre>|</pre>\
<pre>|</pre>\
<pre>|</pre>\
<pre>|</pre>",

"<pre>_________</pre>\
<pre>|       |</pre>\
<pre>|       O</pre>\
<pre>|       $</pre>\
<pre>|</pre>\
<pre>|</pre>\
<pre>|</pre>",

"<pre>_________</pre>\
<pre>|       |</pre>\
<pre>|       O</pre>\
<pre>|       $</pre>\
<pre>|       |</pre>\
<pre>|</pre>\
<pre>|</pre>",

"<pre>_________</pre>\
<pre>|       |</pre>\
<pre>|       O</pre>\
<pre>|       $</pre>\
<pre>|      /|</pre>\
<pre>|</pre>\
<pre>|</pre>",

"<pre>_________</pre>\
<pre>|       |</pre>\
<pre>|       O</pre>\
<pre>|       $</pre>\
<pre>|      /|\\</pre>\
<pre>|</pre>\
<pre>|</pre>",

"<pre>_________</pre>\
<pre>|       |</pre>\
<pre>|       O</pre>\
<pre>|       $</pre>\
<pre>|      /|\\</pre>\
<pre>|      / </pre>\
<pre>|</pre>",

"<pre>_________</pre>\
<pre>|       |</pre>\
<pre>|       O</pre>\
<pre>|       $</pre>\
<pre>|      /|\\</pre>\
<pre>|      / \\</pre>\
<pre>|</pre>",

"<pre>_________</pre>\
<pre>|       /</pre>\
<pre>|      O</pre>\
<pre>|      $</pre>\
<pre>|     /|\\</pre>\
<pre>|     / \\</pre>\
<pre>|</pre>",

"<pre>_________</pre>\
<pre>|       \\</pre>\
<pre>|        O</pre>\
<pre>|        $</pre>\
<pre>|       /|\\</pre>\
<pre>|       / \\</pre>\
<pre>|</pre>"



]