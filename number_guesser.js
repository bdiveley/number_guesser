function randomizeNumber() {
  return Math.floor((Math.random() * maximum) + minimum);
}

function guessNumber() {
  var guessed = document.getElementById("guess").value;
  setMinMax();
  if (validGuess(guessed)) {
    enableBtn("resetbtn");
    enableBtn("clearbtn");
    var feedback = compareNumbers(guessed);
    document.getElementById("response").innerHTML = feedback;
  };
}

function setMinMax() {
  minimum = document.getElementById("minimum").value;
  maximum = document.getElementById("maximum").value;
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert("You must enter a number");
    return false;
  } else if (parseInt(guess) < minimum || parseInt(guess) > maximum) {
    alert("Number must be within range");
    return false;
  } else {
    return true;
  };
}

function compareNumbers(guess) {
  text = `Your last guess was ${guess}.`
  if (guess < answer) {
    return `${text} That is too low`;
  } else if (guess > answer) {
    return `${text} That is too high`;
  } else {
    return "BOOM!";
  };
}

function clearGuess() {
  disableBtn("clearbtn")
  document.getElementById("guess").value = "";
}

function clearResponse() {
  document.getElementById("response").innerHTML = " ";
}

function clearRange() {
  document.getElementById("minimum").value = "";
  document.getElementById("maximum").value = "";
}

function resetGame() {
  clearGuess();
  clearResponse();
  clearRange();
  disableBtn("resetbtn");
  disableBtn("clearbtn");
  answer = randomizeNumber();
}

function disableBtn(button) {
  document.getElementById(button).disabled = true;
}

function enableBtn(button) {
  document.getElementById(button).disabled = false;
}

var answer = randomizeNumber();
var minimum = 0;
var maximum = 0;
