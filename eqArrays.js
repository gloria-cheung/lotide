const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    } 
  }
  return result;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false)
assertEqual(eqArrays([1, 2, "3"], [1, 2, 4]), false)