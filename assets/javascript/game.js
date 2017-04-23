//word list
var words = [ "fallout", "mass effect","tron", "donkey kong","golden eye"]
//chose word at random from list
var compWord = words[Math.floor(Math.random()*words.length)]
console.log(compWord)//for testing
//creates the blank letter spaces and assigns a id based on index
for (var i = 0; i < compWord.length; i++) {
	var item = document.createElement("li");
	item.className = 'guessWordLetter';
	item.id = compWord[i] === " " ? "space" : i;
	item.innerHTML = item.id === "space" ? " " : "_";
	document.getElementById("guessWord").appendChild(item);

}//for
//string of all guessed letters
var guessedLetters = "";
// bool for if won or lost
var won;
//on guess button click runs mainGame
document.getElementById('guessButton').addEventListener("click",function () {mainGame();})

function mainGame(){
	//grabs the letter guesses
	var guessLetter = document.getElementById("userGuess").value;
	//check against gessed letter and return if already guessed
	for (var i = 0; i < guessedLetters.length; i++) {
		if(guessedLetters[i] === guessLetter){
			console.log("already guessed that try agian")
			return
		}
	}
	//loop thru word and check if letter appears in it
	for (var i = 0; i<compWord.length; i++) {
		//grabs letter based on index which is also its id
		var letter = document.getElementById(i);
		//reveal letter if appears
		if(guessLetter === compWord[i]){
			letter.innerHTML = compWord[i]

		}//if
	}//for
	//adds letter to already guessed letter list
	guessedLetters += guessLetter;
	guessLetter.reset;
	//clears form
	document.getElementById("guessForm").reset();
	//grabs all displayed letters
	var check = document.getElementsByClassName("guessWordLetter");
	//loops thru elements 
	for (var i = 0; i < check.length; i++) {
		console.log("checking")
		if(check[i].innerHTML === "_"){
			return
		}
	}
	won = true;
	gameEnd(won);

}

function gameEnd(won){
	if(won){
		document.getElementById("userGuess").disabled = true;
		document.getElementById("userSolve").disabled = true;
	}
}
//code example
//create buttons
// function makeButtons () {
// 	btnList = document.getElementById("alphabet");

// 	for (var i of alphabet) {
// 	    item = document.createElement('li');
// 	    item.className = 'letter';
// 	    item.id = i;
// 	    item.innerHTML = i;
// 	    item.addEventListener("click", function () {makeGuess(this.innerHTML);});
// 	    btnList.appendChild(item);
// 	}
// }