const removeFromArray = function(array, ...args) {
  newArray = [];
  newArray = array.filter(elem => !args.includes(elem));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
