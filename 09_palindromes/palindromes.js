const palindromes = function (string) {
  const firstString = string.toLowerCase().replace(/[^a-z]/g, "");
  const lastString = firstString.split('').reverse().join('');
  return firstString === lastString;
};

// Do not edit below this line
module.exports = palindromes;
