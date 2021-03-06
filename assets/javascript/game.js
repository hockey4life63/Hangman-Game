$(document).ready(function(){
	$(".container").fadeIn(1000);
})
window.onload=function(){
	hangManObj.loadUp.play();
}
function gameSetup(){
	//setups main gameplay area html
	document.getElementById("gameArea").innerHTML ='\
					<div class="statContainer">\
					<div id="statBox"><h1>Stats</h1>\
					<h2>Misses Left:</h2><p id="missCount"></p>\
					<h2>Total Guesses:</h2><p id="guessCount"></p>\
					<h2>Total Wins:</h2><p id=winCount></p>\
					<h2>Total Loses:</h2><p id="lossCount"></p></div>\
					<div id="hangManArt">\
							<pre>_________</pre>\
							<pre>|</pre>\
							<pre>|</pre>\
							<pre>|</pre>\
							<pre>|</pre>\
							<pre>|</pre>\
							<pre>|</pre>\
						</div></div><form id="guessForm"> \
						<input type="text" name="guess" id="userGuess" maxlength="1" autofocus="autofocus"> \
						<button type="button" id="guessButton">Guess</button> \
						<br>\
						<input type="text" name="solve" id="userSolve">\
						<button type="button" id="solveButton">Solve</button>\
						<br>\
					</form>\
					<ul id="guessWord"></ul>\
					<h2 class="infoTitle">Guessed Letters</h2>\
					<div id="guessedList"></div>'
					document.getElementById("gameLog").classList.remove("hidden")
					hangManObj.totalGuess = 0;
					hangManObj.totalMisses = 0;
					hangManObj.updateStats();
					window.setTimeout(function() {
						document.getElementById("hangManArt").innerHTML=hangManObj.art[10]
					}, 2001);

}//setups the play area
function newWordSpace(word){
	//creates the blank letter spaces and assigns a id based on index
	document.getElementById("guessWord").innerHTML ="";
	for (var i = 0; i < word.length; i++) {
		var item = document.createElement("li");
		item.className = 'guessWordLetter';
		//checks if space and assigns id space otherwise gives id of index positon
		item.id = word[i] === " " ? "space" : i;
		//if id of space puts space otherwise puts _
		item.innerHTML = item.id === "space" ? " " : "_";
		document.getElementById("guessWord").appendChild(item);
	}
}
//calls everthing need to start a new game and resets guess and miss count
function newGame(){
	hangManObj.newWord();
	newWordSpace(hangManObj.compWord);
	hangManObj.guessedLetters = "";
}

//on guess button click runs starts tje game
document.getElementById("startButton").addEventListener("click", function(){
	gameSetup();
	newGame();
	hangManObj.onGameStart.play();
	document.getElementById('guessButton').addEventListener("click",function () {mainGame();})
	//allows enter to submit guess letter
	document.getElementById('userGuess').onkeydown = function(e){
	   if(e.keyCode == 13){
	   		mainGame();
	   }
	};
	//adds event listener for solve button and hides start button
	document.getElementById("solveButton").addEventListener("click" ,function() {solve();})
	document.getElementById("startButton").setAttribute("class", "hidden");
});

function mainGame(){
	//grabs the letter guesses
	var guessLetter = document.getElementById("userGuess").value.toLowerCase();
	var letterFound = false;
	//Check if a vaild char and not blank space
	if(hangManObj.alphabet.indexOf(guessLetter)=== -1 || guessLetter === ""){
		log.innerHTML ="Invaild option";
		permLog.innerHTML += "Invaild option <br>"
		guessLetter.reset;
		document.getElementById("guessForm").reset();
		return
	}
	//check against gessed letter and return if already guessed
	for (var i = 0; i < hangManObj.guessedLetters.length; i++) {
		if(hangManObj.guessedLetters[i] === guessLetter){
			log.innerHTML = "You already guessed "+ guessLetter + " try agian";
			permLog.innerHTML += "You already guessed "+ guessLetter + " try agian <br>";
			guessLetter.reset;
			document.getElementById("guessForm").reset();
			return
		}
	}
	hangManObj.totalGuess++;
	hangManObj.updateStats();
	//loop thru word and check if letter appears in it
	for (var i = 0; i<hangManObj.compWord.length; i++) {
		//grabs letter based on index which is also its id
		var letter = document.getElementById(i);
		//reveal letter if appears
		if(guessLetter === hangManObj.compWord[i]){
			letter.innerHTML = hangManObj.compWord[i];
			letterFound = true;
		}//if
	}//for
	//if letter is not found aka false add to totale misses and update art
	if(!letterFound){
			hangManObj.totalMisses++
			if(hangManObj.totalMisses===hangManObj.maxGuess){
				hangManObj.won = false
				hangManObj.updateStats();
				gameEnd(hangManObj.won)
				return
			}
			hangManObj.updateStats();
			document.getElementById("hangManArt").innerHTML=hangManObj.art[hangManObj.totalMisses-1]
		}
	//adds letter to already guessed letter list
	hangManObj.guessedLetters += guessLetter;
	//rewrite guessed list with new addition
	document.getElementById("guessedList").innerHTML = "";
	for (var i = 0; i < hangManObj.guessedLetters.length; i++) {
		document.getElementById("guessedList").innerHTML += hangManObj.guessedLetters[i].toUpperCase();
	}
	guessLetter.reset;
	//clears form
	document.getElementById("guessForm").reset();
	//grabs all displayed letters
	var check = document.getElementsByClassName("guessWordLetter");
	//loops thru elements if missing letters still return out of func
	for (var i = 0; i < check.length; i++) {
		if(check[i].innerHTML === "_"){
			return
		}
	}
	//if make thru the final check it means player won, set won bool to true and calls gameEnd fucntion 
	hangManObj.won = true;
	gameEnd(hangManObj.won);

}//mainGAme

//checks if the awnser given for solve matches and calls gaemEnd with apporiate won statefunction solve(){
function solve(){
	var userSolveWord = document.getElementById("userSolve").value.toLowerCase();
	if(userSolveWord === hangManObj.compWord){
		hangManObj.won=true;
		gameEnd(hangManObj.won);
	}
	else{
		hangManObj.won = false;
		gameEnd(hangManObj.won);
	}

}
//all the funcs needed to mak the swinging hangman
function artSwingLeft(){
	document.getElementById('hangManArt').innerHTML = hangManObj.art[8];

}
function artSwingRight(){
	document.getElementById('hangManArt').innerHTML = hangManObj.art[9];
}
function artSwingMiddle(){
	document.getElementById('hangManArt').innerHTML = hangManObj.art[7];

}
//func for the animation of the swinging hangman
function swingArt(){
	window.setTimeout(function() {artSwingLeft();}, 500);
	window.setTimeout(function() {artSwingMiddle();}, 1000);
	window.setTimeout(function() {artSwingRight();}, 1500);
	window.setTimeout(function() {artSwingMiddle();}, 2000);
}
//takes in a bool and displays info on weather won or loss and plays apporiate sound
function gameEnd(won){
	//disables both form inputs
	document.getElementById("guessForm").reset();
	document.getElementById("userGuess").disabled = true;
	document.getElementById("userSolve").disabled = true;
	//reveals start game button
	document.getElementById("startButton").classList.remove("hidden")
	if(won){
		hangManObj.gameWin.play();
		log.innerHTML = "You Won!";
		hangManObj.totalWins++;
		hangManObj.updateStats();
	}
	else{
		hangManObj.gameLose.play();
		document.getElementById('hangManArt').innerHTML = hangManObj.art[7]
		log.innerHTML = "Sorry you lost :/ the name was " + hangManObj.compWord;
		hangManObj.totalLosses++;
		hangManObj.updateStats();
		var swingAnimation = window.setInterval(function(){
			swingArt();
		}, 2000)
		swingArt();
		swingAnimation;
		document.getElementById("startButton").addEventListener("click", function(){
			clearInterval(swingAnimation);
		})
	}
}
