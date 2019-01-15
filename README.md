Number Guesser is a Javascript application that allows players to guess a randomized number within a selected range.

![alt text](/images/number_guess.png)

Upon game start, the player can select a minimum and maximum number range to begin.  The minimum and maximum numbers are inclusive so the randomized number generator may choose those as the correct answer.

The user click the Set Range Button and the game begins.  After the range is set, the Range buttons and the range input fields are inaccessible to the player until the player chooses to hit the Reset button to start the game from scratch.

![alt text](/images/select_range.png)

The user selects a number and types it into the guess input field as directed and selects the Guess button.

![alt text](/images/guess.png)

Note:  if the user enters anything other than an integer or a number outside the minimum and maximum range, a pop up alert message will scold them accordingly and the game will be paused until the user inputs an appropriate number.

After a player makes a guess, they are given a response that displays their last guess and whether their guess was two high or two low.  The player has an infinite number of chances to guess the correct answer.

![alt text](/images/feedback.png)

Once the answer is correctly guessed, the user will receive this response and they will be taken to the next level of play.

![alt text](/images/correct_guess.png)

The next level of play increases the guessing number range by 10 digits in both directions.  A new randomized answer is generated and the new level begins again.  

At any time, the user can click the Clear button to clear their last guess.

![alt text](/images/reset_game.png)

When a player wants to restart the game, they can select the Reset button.  The player now has access to the Minimum and Maximum number range fields again and may select a new number range to start from.  

Users can play the game through Github's Hosted Pages by following this link - https://bdiveley.github.io/number_guesser
