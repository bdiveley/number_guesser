function randomizeNumber() {
  min = Math.ceil(minimum);
  max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

function setGameVariables() {
  minimum = parseInt(document.getElementById("minimum").value);
  maximum = parseInt(document.getElementById("maximum").value);
  answer = randomizeNumber();
  disableBtn("rangebtn");
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

function levelUp() {
  minimum -= 10;
  maximum += 10;
  document.getElementById("minimum").value = minimum;
  document.getElementById("maximum").value = maximum;
  answer = randomizeNumber();
}

function resetGame() {
  clearGuess();
  clearResponse();
  clearRange();
  disableBtn("resetbtn");
  disableBtn("clearbtn");
  enableBtn("rangebtn")
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
