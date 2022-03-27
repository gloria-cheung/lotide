const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i ++) {
    if (!(arr1[i] === arr2[i])) {
      return false;
    }
  }
  return true;
};

// tests:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays(["1", 2, "3"], ["1", 2, "3", 5]), false);
assertEqual(eqArrays([1, 2, "3", 5, 6, 7], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, "3", "hello"], ["goodbye", 1, 2, 4]), false);
assertEqual(eqArrays([1, 2, "3"], [1, 2, "3", 3, 2, 2, 2]), false);