function setGameVariables() {
  minimum = parseInt(document.getElementById("minimum").value);
  maximum = parseInt(document.getElementById("maximum").value);
  answer = randomizeNumber();
  disableBtn("rangebtn");
  disableBtn("minimum");
  disableBtn("maximum");
}

function guessNumber() {
  var guessed = parseInt(document.getElementById("guess").value);
  if (validGuess(guessed)) {
    enableBtn("resetbtn");
    enableBtn("clearbtn");
    var feedback = compareNumbers(guessed);
    document.getElementById("response").innerHTML = feedback;
  };
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert("You must enter a number");
    return false;
  } else if (guess < minimum || guess > maximum) {
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
    levelUp();
    return `BOOM!  Your just leveled up!  Your new guess range is ${minimum} to ${maximum}`;
  };
}

function randomizeNumber() {
  min = Math.ceil(minimum);
  max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function levelUp() {
  minimum -= 10;
  maximum += 10;
  setMinDisplay(minimum);
  setMaxDisplay(maximum);
  answer = randomizeNumber();
}

function clearRange() {
  setMinDisplay("");
  setMaxDisplay("");
}

function setMinDisplay(input) {
  document.getElementById("minimum").value = input;
}

function setMaxDisplay(input) {
  document.getElementById("maximum").value = input;
}

function resetGame() {
  clearGuess();
  clearResponse();
  clearRange();
  disableBtn("resetbtn");
  disableBtn("clearbtn");
  enableBtn("rangebtn");
  enableBtn("minimum");
  enableBtn("maximum");
}

function clearGuess() {
  disableBtn("clearbtn")
  document.getElementById("guess").value = "";
}

function clearResponse() {
  document.getElementById("response").innerHTML = " ";
}

function disableBtn(button) {
  document.getElementById(button).disabled = true;
}

function enableBtn(button) {
  document.getElementById(button).disabled = false;
}

var answer = 0;
var minimum = 0;
var maximum = 0;
