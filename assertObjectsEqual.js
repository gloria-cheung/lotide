const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i ++) {
    if (!(arr1[i] === arr2[i])) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let arrKeys1 = Object.keys(object1);
  let arrKeys2 = Object.keys(object2);

  // checking to see if same number of keys in each object
  if (arrKeys1.length === arrKeys2.length) {
    // iterate over the keys to see if values are the same
    for (let el of arrKeys1) {
      // if is an array, need to call eqArray function to compare
      if (Array.isArray(object1[el])) {
        if (!(eqArrays(object1[el], object2[el]))) return false;
      } else {
        if (!(object1[el] === object2[el])) return false;
      }
    }

    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  // required a library from util so we can use the "inspect" function --> to see the actual object
  // otherwise, will print out [object Object] === [object Object] or [object Object] !== [object Object]
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    // need to call inspect on each variable to see it
    console.log(`😄😄😄 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// tests:
assertObjectsEqual({a: "1", b: "2"}, {b: "2", a: "1"});
assertObjectsEqual({b: "2", a: "1"}, {a: "1", b: "2"});
assertObjectsEqual({d: ["2", 3], c: "1"}, {c: "1", d: ["2", 3]});
assertObjectsEqual({c: "1", d: ["2", 3]}, {d: ["2", 3], c: "1"});
assertObjectsEqual({a: "1", b: "2", c: "3"}, {a: "1", b: "2"});
assertObjectsEqual({b: "2", a: "1"}, {a: "1", b: "2", c: "3"});
assertObjectsEqual({c: "1", d: ["2", 3, 4]}, {a: "1", b: "2", c: "3"});
assertObjectsEqual({b: "2", a: "1"}, {c: "1", d: ["2", 3, 4]});
assertObjectsEqual({c: "1", d: [1, "2", 3, 4]}, {c: "1", d: ["2", 3, 4]});
assertObjectsEqual({b: "2", a: "1"}, {c: "1", d: [1, "2", 3, 4]});

