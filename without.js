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

const without = function(sourceArr, itemsToRemoveArr) {
  let result = [];
  for (let i = 0; i < sourceArr.length; i ++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
      result.push(sourceArr[i]);
    }
  }
  return result;
};

// tests:
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3", 4, 10, "hello"], [1, 2, "3", "abc", 44]), ["1", "2", 4, 10, "hello"]);
assertArraysEqual(without(["1", "2", "3"], [1, "2", "3"]), ["1"]);
assertArraysEqual(without([1, 2, "3"], [1, 2, "3"]), []);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);