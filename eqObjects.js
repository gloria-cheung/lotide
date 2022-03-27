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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// tests:
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, ab), true);

const abc = {a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, ab), false);

const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(dc, cd), true);

const cd2 = {c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd2, cd), false);

const cd3 = {c: "1", d: [1, "2", 3, 4]};
assertEqual(eqObjects(cd3, cd2), false);
assertEqual(eqObjects(cd2, cd3), false);