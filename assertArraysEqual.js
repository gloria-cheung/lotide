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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("the arrays are equal");
  } else {
    console.log("the arrays are not equal");
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual(["hello", 2, "3"], [1, 2, 3]);