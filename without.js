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
    }
  }
  return result;
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
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["hello", "world", "lighthouse"], ["lighthouse"]);


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);