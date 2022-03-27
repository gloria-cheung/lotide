const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("the arrays are equal");
  } else {
    console.log("the arrays are not equal");
  }
};

const eqArrays = function(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
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

//test
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [1, 2], [2, 3], 4, 4]), [1, 1, 2, 2, 3, 4, 4]);
assertArraysEqual(flatten([0, [1, 1], [9, 9, 9]]), [0, 1, 1, 9, 9, 9]);