const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("the arrays are equal");
  } else {
    console.log("the arrays are not equal");
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

const middle = function(arr) {
  let result = [];
  if (arr.length <= 2) {
    return result;
  } else if (arr.length % 2 === 1) {
    let idx = (arr.length - 1) / 2;
    result.push(arr[idx]);
  } else {
    let idx = arr.length / 2;
    result.push(arr[idx - 1]);
    result.push(arr[idx]);
  }
  return result;
};

// tests:
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(["hello", "goodbye"]), []);
assertArraysEqual(middle([1, "hello", "goodbye", 2]), ["hello", "goodbye"]);
assertArraysEqual(middle([11, 2, 33, 10, "hello", 1, 5, 4]), [10, "hello"]);

