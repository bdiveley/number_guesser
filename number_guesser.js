function randomizeNumber() {
  return Math.floor((Math.random() * 10) + 1);
}

function guessNumber() {
  var x = document.getElementById("guess").value;
  text = `Your last guess was ${x}. `
  if (x < answer) {
    var feedback = "That is too low";
  } else if (x > answer) {
    var feedback = "That is too high";
  } else {
    var feedback = "BOOM";
    resetGame();
  };
  document.getElementById("response").innerHTML = text + feedback;
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
  answer = randomizeNumber();
}

var answer = randomizeNumber();
