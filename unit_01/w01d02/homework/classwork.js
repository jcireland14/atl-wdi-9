// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

/// Basic Data Types and Expressions ///
// For each expression below, indicate whether it is 'truthy' or 'falsey'
// by assigning the appropriate variable a value of either `true` or `false`.

<<<<<<< HEAD
// 1. true || false
//var resOne = true;
var resOne = true;

// 2. null || ''
//var resTwo = falsey;
var resTwo = false;

// 3. 'false' && true
//var resThree = true;
var resThree = true;

// 4. !!0
//var resFour = false;
var resFour = false;

// 5. !null && !undefined
//var resFive = true;
var resFive = true;




/// Flow Control ///

// 6. Write a `while` loop that increases `resSix` by 23 until `resSix` is five
//    digits long. (Hint: take a look at the .toString() method)
var resSix;
// Replace This Comment With Your Code

// 7. Write a `while` loop that increases `resSeven` by 12 when it's strictly
//    below 95, decreases it by 7 when it's strictly above 105, and stops as
//    soon as `resSeven` equals or falls between those two values.
<<<<<<< HEAD
var resSeven = 65;
while (resSeven > 105 || resSeven < 95){
  if (resSeven > 105) {
    resSeven -= 7;
    console.log("if statement: " + resSeven);
  }
  else if (resSeven <95) { // could also just be 'else'
  resSeven += 12;
  console.log("else if statement: " + resSeven);
  }
  }


// 8. Write a `for` loop that counts from 0 (inclusive) to 1857 (exclusive) and
//    calculates the sum of all of those numbers, storing the result in the
//    variable `resEight`.
var resEight;
resEight = 0;
for (var i = 0; i > 1857; i++) {
  resEight += i;
}

// 9. Using a `for` loop, calculate the sum of all multiples of 7 between 0
//    (inclusive) and 1000 (exclusive); store the result in the variable
//    `resNine`.
var resNine;
resNine = 0;
for (var i = 0; i <= 1000; i++){
  if (i%7=== 0) {
    resNine+= i;
  }
}

// 10. For numbers 1-10, calculate n^n and then store the sum of all of these values in the variable `resTen`.
var resTen;
resTen = 0;
for (var i = 1; i <= 10; i++) {
  var product = 1;
  for (var j = 0; j < i; j++) {
    product *= i;
  }
  resTen += product;
}

// Replace This Comment With Your Code

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  one: resOne,
  two: resTwo,
  three: resThree,
  four: resFour,
  five: resFive,
  six: resSix,
  seven: resSeven,
  eight: resEight,
  nine: resNine,
  ten: resTen
}
