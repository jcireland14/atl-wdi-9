//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

//1. define the function
//2. define an emptpy array
//3. for each string in the original array
//4. we are going to find the length
//5. and push the length to the new array as a number
//6. return the new array

function lengths (arrayOfStrings){
  var arrayOfNumbers = [];

  for (var i=0; i< arrayOfStrings.length; i++) {
    var lengthOfString = arrayOfStrings[i].length;
    arrayOfNumbers.push(lengthOfString);
  }
  return arrayOfNumbers;
}

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

//1. define function called transmogrifier
//2. define three parameters called base1, base2, exponent
//3. find the product of the first two numbers (base1 and base2)
//4. raise that product to the power of exponent
//5. return the transmogrofied number

var transmogrifier = function (base1, base2, exponent) {
var productOfBases = base1 * base2;
return Math.pow(productOfBases, exponent);
}



// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

//1. define function called "wordReverse"
//2. define one pararmeter called stringToReverse
//3. turn the string into array of words
//4. create an empty variable to store reversed array
//5. working backwards from the original array, place them into the empty array
//6.return the reversed array as a string


function wordReverse(stringToReverse){
  var arrayOfWords = stringToReverse.split(' this java shit is for the birds');
  var reversedWords = [];
  reversedWords = arrayOfWords.reverse();
  return reversedWords.join(' ');
}
























