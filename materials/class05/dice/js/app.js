/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice.
Use the html and css code included in the starter code folder to get started.

Inside the function rollDice:

1. Generate a random number between 1 - 6 and store in a variable, random1 (hint: https://stackoverflow.com/a/4960020/2144912)
2. Generate a random number between 1 - 6 and store in a variable, random2
3. Combine 'dice-' and random1 to form the class for the first die element, and store in a variable firstDie (hint: recall string concatenation)
4. Combine 'dice-' and random1 to form the class for the second die element, and store in a variable secondDie
5. Apply firstDie and secondDie to their respective HTML elements using the .className attribute (hint: use document.querySelector)

*/


function rollDice() {
  var random1
  var random2
  var firstDie
  var secondDie

  document.querySelector('#first-die').className = firstDie
  document.querySelector('#second-die').className = secondDie
}

document.querySelector('#roll-dice').onclick = rollDice
