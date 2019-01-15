function randomizeNumber() {
  return Math.floor((Math.random() * 10) + 1);
}

function guessNumber() {
  var guessed = document.getElementById("guess").value;
  if (validGuess(guessed)) {
    var feedback = compareNumbers(guessed);
    document.getElementById("response").innerHTML = feedback;
  };
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert("You must enter a number");
    return false;
  } else if (parseInt(guess) < 1 || parseInt(guess) > 10) {
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
  document.getElementById("guess").value = "";
}

function clearResponse() {
  document.getElementById("response").innerHTML = " ";
}

function resetGame() {
  clearGuess();
  clearResponse();
  answer = randomizeNumber();
}

var answer = randomizeNumber();
