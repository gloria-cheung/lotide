const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

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

module.exports = assertObjectsEqual;