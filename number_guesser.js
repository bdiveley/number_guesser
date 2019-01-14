/* Zero State:
An input field for guessing the number  X
A button for submitting a guess X
A button for clearing the input field X
A button that resets the game X
User’s Guess State:
Display the user’s most recent guess X
Display results and feedback:
If their guess is too high, it should display: “That is too high”
If their guess is too low, it should display: “That is too low”
If the guess is correct, it should display: “BOOM!”

guessNumber()
clearGuess()
resetGame()
*/

function randomizeNumber() {
  Math.floor((Math.random() * 100) + 1);
}

function guessNumber() {
  var x = document.getElementById("guess").value;
  text = `Your last guess was ${x}`;
  document.getElementById("response").innerHTML = text;
}

function clearGuess() {
  document.getElementById("guess").value = " ";
}

function clearResponse() {
  document.getElementById("response").innerHTML = " ";
}

function resetGame() {
  clearGuess();
  clearResponse();
  playGame();
}

function playGame() {

}
