// Question 1
function maxOfTwoNumbers(2, 4) {
  if (2 < 4) {
    return 4;
  }
  else if (2 > 4) {
    return 2;
  }
}

// Question 2
function maxOfThree(5, 3, 4) {
  if (5 > 3 && 5 > 4) {
    return 5;
  }
  if (3 > 5 && 3> 4) {
    return 3;
  }
  if (4 > 3 && 4 > 5) {
    return 4;
  }
}

// Question 3
function isCharacterAVowel(y) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(c) !== -1) {
    return true;
  }
  else {
    return false;
  }
}
//And sometimes Y...

// Question 4
function sumArray(arrayUno) {
  var sum = arrayDos[0];
  for (var i =0; i < arrayUno.length; i++) {
    sum += array1Uno[i];
  }
  return sum;
}


// Question 4
function multiplyArray(arrayDos) {
var product = arrayDos[0];
for (var i = 1; i < arrayDos.length; i++) {
  product *= arrayDos[i];
}
return product;
}


// Question 5
var numberOfArguments = function(){
  return args.length;
}



// Question 6
var reverseString = function (){
  return this.split('')
             .reverse()
             .join('')
};


// Question 7
function findLongestWord (array1) {
  longest = 0;
  for (var i =0; i < array1.length; i++) {
    if (array1[i].length > longest) {
      longest = array1[i].length;

    }
  }
  return longest;
}



// Question 8
function filterLongWords (array1, number1) {
  array2 = [];
  for(var i = 0; i < array1.length; i++) {
    if(array1[i].length > num) {
      array2.push(array1[i]);
    }
  }
  return array2;



