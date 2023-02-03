const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  let sum = 0;
	return array.reduce((acc, value) => acc + value, sum)
};

const multiply = function(array) {
  let initialValue = 1;
	return array.reduce((acc, value) => acc * value, initialValue)
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  let fact = 1;
  for (i=a; i>0; i--) {
    fact = fact * i;
  }
  return fact;
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
