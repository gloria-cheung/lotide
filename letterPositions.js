const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i ++) {
    if (!(arr1[i] === arr2[i])) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("the arrays are equal");
  } else {
    console.log("the arrays are not equal");
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

// tests:
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("i am a student")["a"], [2, 5]);
assertArraysEqual(letterPositions("i like to code")["i"], [0, 3]);
assertArraysEqual(letterPositions("food is awesome")["o"], [1, 2, 12]);
assertArraysEqual(letterPositions("my name is gloria")["i"], [8, 15]);
assertArraysEqual(letterPositions("lighthouse in the house")["i"], [1, 11]);