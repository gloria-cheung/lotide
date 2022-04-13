const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {
  it("returns 3 after counting how many times 'l' appears in 'hello my name is gloria'", () => {
    const message1 = 'hello my name is gloria';
    assert.deepEqual(countLetters(message1)['l'], 3);
  });

  it("returns 2 after counting how many times 'o' appears in 'hello my name is gloria'", () => {
    const message1 = 'hello my name is gloria';
    assert.deepEqual(countLetters(message1)['o'], 2);
  });

  it("returns 1 after counting how many times 'g' appears in 'hello my name is gloria'", () => {
    const message1 = 'hello my name is gloria';
    assert.deepEqual(countLetters(message1)['g'], 1);
  });

  it("returns 3 after counting how many times 'e' appears in 'lighthouse in the house'", () => {
    const message2 = 'lighthouse in the house';
    assert.deepEqual(countLetters(message2)['e'], 3);
  });

  it("returns 4 after counting how many times 'h' appears in 'lighthouse in the house'", () => {
    const message2 = 'lighthouse in the house';
    assert.deepEqual(countLetters(message2)['h'], 4);
  });
});