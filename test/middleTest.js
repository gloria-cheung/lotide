const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(["hello", "goodbye"]), []);
assertArraysEqual(middle([1, "hello", "goodbye", 2]), ["hello", "goodbye"]);
assertArraysEqual(middle([11, 2, 33, 10, "hello", 1, 5, 4]), [10, "hello"]);

