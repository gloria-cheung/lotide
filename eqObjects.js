const eqArrays = require("./eqArrays");

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
module.exports = eqObjects;
