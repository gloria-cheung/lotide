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

// take until function:
const takeUntil = function(arr, callback) {
  let result = [];
  for (let el of arr) {
    if (callback(el)) {
      break;
    } else {
      result.push(el);
    }
  }
  return result;
};

// tests:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ","), ["I've", "been", "to", "Hollywood"]);

const data3 = [1, 7, 11, 15, 25, 2 , 10, 9, 8];
assertArraysEqual(takeUntil(data3, x => x % 2 === 0), [1, 7, 11, 15, 25]);