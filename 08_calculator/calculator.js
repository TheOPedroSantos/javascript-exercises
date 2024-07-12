const add = function(input1, input2) {
	result = (input1 + input2);
  return result;
};

const subtract = function(input1, input2) {
	result = (input1 - input2);
  return result;
};

const sum = function(array) {
	let result = 0;
  for ( let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

// const sum = function(array) {
//   return array.reduce((total, current) => total + current, 0);
// };

const multiply = function(array) {
  let result = 1;
  for (i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

// const multiply = function(array) {
//   return array.reduce((total, current) => total * current, 0);
// };

const power = function(input1, input2) {
	let result = 1;
   
};

const factorial = function(input1, input2) {
	
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
