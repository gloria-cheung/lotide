const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i ++) {
    if (!(arr1[i] === arr2[i])) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// map function:
const map = function(arr, callback) {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }
  
  return results;
};

// tests:
const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word.toUpperCase()),["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
assertArraysEqual(map(words, word => word.length),[6, 7, 2, 5, 3]);
assertArraysEqual(map(words, word => `'${word}' has ${word.length} letters`), ["'ground' has 6 letters","'control' has 7 letters","'to' has 2 letters","'major' has 5 letters","'tom' has 3 letters"]);
