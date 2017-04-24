var hangManObj = new Object();
//string of all guessed letters
hangManObj.guessedLetters = "";
hangManObj.maxGuess =9;
hangManObj.totalGuess =0;
hangManObj.totalMisses =0;
hangManObj.alphabet = "abcdefghijklmnopqrstuvwxyz"
// bool for if won or lost
hangManObj.won;
//word list
hangManObj.words = [ "fallout", "mass effect","tron", "donkey kong","golden eye"];
hangManObj.compWord
hangManObj.newWord = function(){
	hangManObj.compWord = hangManObj.words[Math.floor(Math.random()*hangManObj.words.length)]
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