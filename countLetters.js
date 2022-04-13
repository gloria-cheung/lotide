const countLetters = function(str) {
  let result = {};

  for (let char of str) {
    if (char !== " ") {
      if (!result[char]) {
        result[char] = 1;
      } else {
        result[char] ++;
      }
    }
  }
  return result;
};

module.exports = countLetters;
