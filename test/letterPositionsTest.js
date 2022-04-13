const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("returns [2, 3] after looking at letter position of 'l' in 'hello'", () => {
    assert.deepEqual(letterPositions('hello',['l'])['l'], [2, 3]);
  });

  it("returns [2, 5] after looking at letter position of 'a' in 'i am a student'", () => {
    assert.deepEqual(letterPositions('i am a student',['a'])['a'], [2, 5]);
  });

  it("returns [0, 3] after looking at letter position of 'i' in 'i like to code'", () => {
    assert.deepEqual(letterPositions('i like to code',['i'])['i'], [0, 3]);
  });

  it("returns [1, 2, 12] after looking at letter position of 'o' in 'food is awesome'", () => {
    assert.deepEqual(letterPositions('food is awesome',['o'])['o'], [1, 2, 12]);
  });

  it("returns [8, 15] after looking at letter position of 'i' in 'my name is gloria'", () => {
    assert.deepEqual(letterPositions('my name is gloria',['i'])['i'], [8, 15]);
  });

  it("returns [1, 11] after looking at letter position of 'i' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house',['i'])['i'], [1, 11]);
  });
});