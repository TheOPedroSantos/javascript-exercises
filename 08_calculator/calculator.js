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
  return result = Math.pow(input1, input2);
};

const factorial = function(num) {
  let result = num;
  if (num == 0 || num == 1)
    return 1;
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
