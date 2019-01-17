var gameVars = {
  answer: 0,
  minimum: 0,
  maximum: 0,
}

function setGameVariables() {
  gameVars.minimum = parseInt(document.getElementById("minimum").value);
  gameVars.maximum = parseInt(document.getElementById("maximum").value);
  gameVars.answer = randomizeNumber();
  disableBtn("rangebtn");
  disableBtn("minimum");
  disableBtn("maximum");
}

function guessNumber() {
  const guessed = parseInt(document.getElementById("guess").value);
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
  } else if (guess < gameVars.minimum || guess > gameVars.maximum) {
    alert("Number must be within range");
    return false;
  } else {
    return true;
  };
}

function compareNumbers(guess) {
  const text = `Your last guess was ${guess}.`
  if (guess < gameVars.answer) {
    return `${text} That is too low`;
  } else if (guess > gameVars.answer) {
    return `${text} That is too high`;
  } else {
    levelUp();
    return `BOOM!  You just leveled up!  Your new guess range is ${gameVars.minimum} to ${gameVars.maximum}`;
  };
}

function randomizeNumber() {
  return Math.floor(Math.random() * (gameVars.maximum - gameVars.minimum + 1)) + gameVars.minimum;
}

function levelUp() {
  gameVars.minimum -= 10;
  gameVars.maximum += 10;
  setMinDisplay(gameVars.minimum);
  setMaxDisplay(gameVars.maximum);
  gameVars.answer = randomizeNumber();
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
