const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const message1 = "hello my name is gloria";
const result1 = countLetters(message1);

const message2 = "lighthouse in the house";
const result2 = countLetters(message2);

assertEqual(result1["l"], 3);
assertEqual(result1["o"], 2);
assertEqual(result1["g"], 1);
assertEqual(result2["e"], 3);
assertEqual(result2["h"], 4);