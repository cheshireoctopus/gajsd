/*
 
	Lab: Higher-Order Functions and Callbacks
 
	Instructions:

	Complete the logic within "makeCountingFunction" and "isOdd"

	"makeCountingFunction" currently takes a "predicate" argument.

	A predicate is a function which evaluates to TRUE or FALSE. In this case, "isOdd"
	will serve as the predicate. It is being passed into "makeCountingFunction" below.

	=== Part One ===
	"makeCounting" should return an anonymous function that:

		1. Iterates through an array and apply the predicate function to each item in
		   that array (this function will thus expect an array as an argument)
		2. Increments a counter based on the result of applying the predicate function
		   to that item (i.e. does it match what we're looking for?)
		3. Returns the final count

	=== Part Two ===
	The predicate function 'isOdd()' should accept an individual number as a
	parameter and return whether or not that number is odd.

	BONUS 1: Can you write another predicate function that counts evens?
	BONUS 2: Can you write a function that will sum up all the numbers?
	BONUS 3: Re-write the function that "makeCountingFunction" so that it does not need
			to rely on a counter. Hint: Consider the Array "filter" method and the
			Array "length" property
*/

function makeCountingFunction(predicate) {
	// code here
}

function isOdd(num) {
	// code here
}


// =============================================================================
// The code below should work without modification.
// =============================================================================

/*
	The line below should package up 'makeCountingFunction()' and 'isOdd()' into
	a single function that accepts an array of items as a parameter, iterates
	through it and returns a count of how many of those items are odd numbers.
	This new function is being assigned to the variable 'countTheOdds'.
*/

var countTheOdds = makeCountingFunction(isOdd);

/*
	The final line below calls our new 'countTheOdds()' function and passes in an
	array of numbers. Once your code is working, the line below should return the
	number 4.
*/

var oddCount = countTheOdds([1, 2, 3, 4, 5, 6, 7]);
console.log('There are ' + oddCount + ' odd numbers.');
// expected output: There are 4 odd numbers.
