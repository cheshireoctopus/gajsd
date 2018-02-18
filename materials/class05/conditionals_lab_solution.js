// CONDITIONALS LAB
// Using an if/else/else if structure, logical operators, and boolean logic, complete the function so that it prints the proper response for a given age input:

// 1) If you are under 16, you cannot do much outside of going to school
// 2) If you are 16 or older, you can drive
// 3) If you 18 or older, you can vote
// 4) If you are 21 or older, you can drink alcohol
// 5) If you are 25 or older, you can rent a car
// 6) If you are 35 or older, you can run for president
// 7) If you are 62 or older, you collect social security benefits

function whatCanYouDo (age) {
	if (age < 16) {
		console.log('you can go to school! YES!');
	} else if (age >= 16 && age < 18) {
    console.log('you can drive!');
  } else if (age >= 18 && age < 21) {
    console.log('you can vote!');
  } else if (age >= 21 && age < 25) {
    console.log('you can drink beer!')
  } else if (age >= 25 && age < 35) {
    console.log('you can rent a car')
  } else if (age >= 35 && age < 62) {
    console.log('you can run for president')
  } else {
    console.log('you can collect your social security')
  }
}

// Change this variable's value to generate different responses from the whatCanYouDo function
var age = 29;

// We haven't seen this yet, but this is how we call (or, invoke) a function
whatCanYouDo(age)

// Remember to use node to run this script > node conditionals_lab.js
