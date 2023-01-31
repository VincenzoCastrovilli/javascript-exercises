const sumAll = function(a, b) {
  if (a < 0 || b < 0) {
    return 'ERROR';
  }

  if ((typeof a != 'number') || (typeof b != 'number')) {
    return 'ERROR';
  }

  if (b < a) {
    let temp = b;
    b = a;
    a = temp;
  }

  let sum = 0;
  for (i = 0; i < (b-a+1); i++) {
    sum += (a + i);
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
