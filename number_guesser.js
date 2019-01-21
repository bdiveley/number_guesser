/* set initial variables in gameVars object upon first gameplay.
used var because it's not within a block scope
and these variables will be changed a lot
throughout gameplace
*/
var gameVars = {
  answer: 0,
  minimum: 0,
  maximum: 0,
}

//function get called when the Set Range button is clicked
function setGameVariables() {
//assigns the value of the minimum element to minimim var; utilizing dot notation
  gameVars.minimum = parseInt(document.getElementById("minimum").value);
////assigns the value of the minimum element to minimim var; utilizing dot notation
  gameVars.maximum = parseInt(document.getElementById("maximum").value);
// sets a new randomized answer that falls within new min/max; utilizing dot notation
  gameVars.answer = randomizeNumber();
//disables all three range elements until game is reset
  disableBtn("rangebtn");
  disableBtn("minimum");
  disableBtn("maximum");
}

//function gets call when the Guess button is clicked
function guessNumber() {
/* set guessed variable (whcih won't change within the block) to the value of the element with id guess
*/
  const guessed = parseInt(document.getElementById("guess").value);
/* run helper function to determine if guess is valid
will return true if valid and execute the rest of
the code
*/
  if (validGuess(guessed)) {
// if guess is valid enable the clear/reset buttons
    enableBtn("resetbtn");
    enableBtn("clearbtn");
/*set feedback variable equal to the return value of
the compareNumber function which will return a string; setting it equal to a const variable because the feedback variable shouldnt change after its set within the function
*/
    const feedback = compareNumbers(guessed);
// set response value to the new feedback variable
    document.getElementById("response").innerHTML = feedback;
  };
}

// function determines if the user guess if valid
function validGuess(guess) {
// if the guess returns true that that guess is not a number
  if (isNaN(guess)) {
// an alert is sent that tells the user the guess must be a number
    alert("You must enter a number");
//and returns false
    return false;
// if the guess does not fall within the min/max range based on gameVars object attributes
  } else if (guess < gameVars.minimum || guess > gameVars.maximum) {
//an alert is sent that tells the user to stay within range
    alert("Number must be within range");
//and returns false
    return false;
  } else {
// if the else line gets hit, it means the guess is valid and returns true
    return true;
  };
}

// function compares guess vs correct answer by passing in guess parameter
function compareNumbers(guess) {
// use const because text won't change again in this block.  Interpolating guess variable into string
  const text = `Your last guess was ${guess}.`
// the if block determines what response should be given to user
  if (guess < gameVars.answer) {
// if guess is less than the answer attribute in the gameVars object, then this string should be displayed
    return `${text} That is too low`;
  } else if (guess > gameVars.answer) {
// if guess is more than the answer attribute in the gameVars object, then this string should be displayed
    return `${text} That is too high`;
  } else {
/* the only other option is that the guess = answer.
in that case, call the levelUp helper function to expand the min/max range
*/
    levelUp();
// displays the new min/max attributes in the gameVars object interpolated in this return string
    return `BOOM!  You just leveled up!  Your new guess range is ${gameVars.minimum} to ${gameVars.maximum}`;
  };
}

// function randomizes a number within a min/max range
function randomizeNumber() {
/* returns a randomized number between min/max attributes of gameVars object (inclusive) must include the word return because
this function is meant to return a value
*/
  return Math.floor(Math.random() * (gameVars.maximum - gameVars.minimum + 1)) + gameVars.minimum;
}

// function levels up gameplay for the next round
function levelUp() {
// subtracts 10 from minimum stored in gameVars object
  gameVars.minimum -= 10;
// adds 10 to maximum attribute stored in gameVars object
  gameVars.maximum += 10;
//calls helper functions to display new min/max attributes in gameVars object
  setMinDisplay(gameVars.minimum);
  setMaxDisplay(gameVars.maximum);
// sets new randomized number to answer attribute in gameVars object
  gameVars.answer = randomizeNumber();
}

// function clears input ranges for max/min
function clearRange() {
//passes in empty string to helper functions
  setMinDisplay("");
  setMaxDisplay("");
}

// function sets minimum number displayed
function setMinDisplay(input) {
/*  grabs the minimum element and edits the value
by the input parameter passed in
*/
  document.getElementById("minimum").value = input;
}

// function sets maximum number displayed
function setMaxDisplay(input) {
/*  grabs the maximum element and edits the value
by the input parameter passed in
*/
  document.getElementById("maximum").value = input;
}

// function get called when reset button is pushed
function resetGame() {
/* call a number of helper functions listed below
in order to clear previous guesses/responses/ranges
and reset buttons
*/
  clearGuess();
  clearResponse();
  clearRange();
  disableBtn("resetbtn");
  disableBtn("clearbtn");
  enableBtn("rangebtn");
  enableBtn("minimum");
  enableBtn("maximum");
}

// function gets called when clear button is pushed
function clearGuess() {
// calls disableBtn method with 'clearbtn' parameter
  disableBtn("clearbtn")
// grabs the guess element and edits the value
  document.getElementById("guess").value = "";
}

// function clears response
function clearResponse() {
//grabs the response element and edits the value
  document.getElementById("response").innerHTML = " ";
}

// function that disables any button
function disableBtn(button) {
/*grabs element by id stored in the button parameter
and sets disabled attribute to true
*/
  document.getElementById(button).disabled = true;
}

// function that enables any button
function enableBtn(button) {
/*grabs element by id stored in the button parameter
and sets disabled attribute to false
*/
  document.getElementById(button).disabled = false;
}
