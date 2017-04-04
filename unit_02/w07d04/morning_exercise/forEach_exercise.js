////////https://github.com/ATL-WDI-Curriculum/atl-wdi-9/tree/master/unit_02/w07d04/morning_exercise



///////#1
var words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
words.map(function(words) {
 var wordsToUp = String.prototype.toUpperCase.apply(words).split(",");
  console.log(wordsToUp);
});
///////#2
var squareMe = [0, 1, 10, 24, 595];

squareMe.forEach(function(num) {
console.log(num * num);
});

 /////////#3
