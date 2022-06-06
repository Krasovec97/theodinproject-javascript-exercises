const add = (num1, num2) => {
	return num1 + num2;
};

const subtract = (num1, num2) => {
	return num1 - num2;
};

const sum = (numArray) => {
  
	return numArray.length > 0 ? numArray.reduce((prevValue, curValue) => prevValue + curValue) : 0;
};

const multiply = (numArray2) => {
  return numArray2.reduce((previous, next) => previous * next);
};

const power = (num1, num2) => {
	return Math.pow(num1, num2);
};

const factorial = (num) => {
  var result = num;
  if (num === 0 || num === 1) {
    return 1; 
  }

  while (num > 1) { 
    num--;
    result *= num;
  }
  
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
