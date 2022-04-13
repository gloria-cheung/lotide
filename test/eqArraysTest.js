const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("returns true if [1, 2, 3] is equal to [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false if [1, 2, 3] is equal to [1, 2, 4]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });

  it("returns false if [1, 2, '3'] is equal to ['1', 2, '3', 5]", () => {
    assert.deepEqual(eqArrays([1, 2, '3'], ['1', 2, '3', 5]), false);
  });

  it("returns false if [1, 2, '3'] is equal to ['1', 2, '3', 5]", () => {
    assert.deepEqual(eqArrays([1, 2, '3'], ['1', 2, '3', 5]), false);
  });

  it("returns false if [1, 2, '3', 5, 6, 7] is equal to [1, 2, 4]", () => {
    assert.deepEqual(eqArrays([1, 2, '3', 5, 6, 7], [1, 2, 4]), false);
  });

  it("returns false if [1, 2, '3', 'hello'] is equal to ['goodbye', 1, 2, 4]", () => {
    assert.deepEqual(eqArrays([1, 2, "3", 'hello'], ['goodbye', 1, 2, 4]), false);
  });

  it("returns false if [1, 2, '3'] is equal to [1, 2, '3', 3, 2, 2, 2]", () => {
    assert.deepEqual(eqArrays([1, 2, '3'], [1, 2, '3', 3, 2, 2, 2]), false);
  });
});