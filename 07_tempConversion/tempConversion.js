const convertToCelsius = function(f) {
  f-=32;
  f*=5;
  f/=9;
  return Math.round(f*10)/10;
};

const convertToFahrenheit = function(c) {
c*=9;
c/=5;
c+=32;
return Math.round(c*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
