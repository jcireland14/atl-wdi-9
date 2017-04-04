var calculate = function(hourhand, minutehand) {
if (hourhand > 12 || hourhand < 0 || minutehand > 59 || minutehand < 0) {
  return('out of range');
}
var hoursToMinutes = (hourhand * 5) + (minutehand / 12);
};

// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
