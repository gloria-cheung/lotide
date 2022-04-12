const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays(["1", 2, "3"], ["1", 2, "3", 5]), false);
assertEqual(eqArrays([1, 2, "3", 5, 6, 7], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, "3", "hello"], ["goodbye", 1, 2, 4]), false);
assertEqual(eqArrays([1, 2, "3"], [1, 2, "3", 3, 2, 2, 2]), false);