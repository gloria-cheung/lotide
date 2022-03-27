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

const flatten = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i ++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result.push(...arr[i]);
    }
  }
  return result;
};

//tests:
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [1, 2], [2, 3], 4, 4]), [1, 1, 2, 2, 3, 4, 4]);
assertArraysEqual(flatten([0, [1, 1], [9, 9, 9]]), [0, 1, 1, 9, 9, 9]);
assertArraysEqual(flatten([1, ["hello", "goodbye"], 4, 6, "hello"]), [1, "hello", "goodbye", 4, 6, "hello"]);
assertArraysEqual(flatten(["cat", "dog", [1, 2, 3], ["pig"]]), ["cat", "dog", 1, 2, 3, "pig"]);
assertArraysEqual(flatten(["light", "house", ["lighthouse"]]), ["light", "house", "lighthouse"]);