const ftoc = function(tempInFahrenheit) {
  const formula = (tempInFahrenheit - 32) * (5 / 9);
  const result = Math.round(formula * 10) / 10;
  return result;
};

const ctof = function(tempInCelsius) {
  const formula = (tempInCelsius * (9 / 5)) + 32;
  const result = Math.round(formula * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
