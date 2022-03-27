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

// tests:
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["hello", "goodbye"], ["hello", "goodbye"]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual(["hello", 2, "3"], [1, 2, 3]);
assertArraysEqual(["hello", 2, "3"], ["hello", 2, "3", 4, 5, 6]);
assertArraysEqual(["1", 2, "3", 4, 5], ["1", "2", "3"]);