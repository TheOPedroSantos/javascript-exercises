const convertToCelsius = function(fahTemp) {
  const result = ((fahTemp - 32) * 0.5556);
  if (result % 1 != 0) {
    return result.toFixed(1);
  } else {
    return result;
  };
};

const convertToFahrenheit = function(celTemp) {
  const result = ((celTemp * 1.8) + 32);
  if (result % 1 != 0) {
    return result.toFixed(1);
  } else {
    return result;
  }
};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
