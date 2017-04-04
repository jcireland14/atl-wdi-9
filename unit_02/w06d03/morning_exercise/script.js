//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //earth circumference = 24901 miles
  //circumference/mpg= 24901/12 = 2075.0833333333335
  //gallons used* cost of fuel= 2075.0833333333335 * 3 = 6225.25
  var circumference= 24901;
  var mpg= miles;
  var shipFuelCost= 3;
  var totalGallons= circumference/ mpg;
  var totalCost= totalGallons* shipFuelCost;

    return totalCost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  //costco= 3gallons
  //costco= 20% per
  ////costco 0.20*3
  //kirkland=2 gallons
  //kirkland= 55% per
  ////kirkland 0.55*2
  var costco= (0.20* 3);
  var kirkland= (0.55*2);
  var totalGallons= (costco + kirkland);
  var totalFruitJuice=
  return(totalFruitJuice);
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
