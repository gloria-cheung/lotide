const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns ['my', 'name', 'is', 'Gloria'] for ['hello', 'my', 'name', 'is', 'Gloria']", () => {
    const words = ['hello', 'my', 'name', 'is', 'Gloria'];
    assert.deepEqual(tail(words), ['my', 'name', 'is', 'Gloria']);
  });

  it("returns 4 for length of tail(['hello', 'my', 'name', 'is', 'Gloria'])", () => {
    const words = ['hello', 'my', 'name', 'is', 'Gloria'];
    assert.deepEqual(tail(words).length, words.length - 1);
  });

  it("returns 'my' for first element of tail(['hello', 'my', 'name', 'is', 'Gloria'])", () => {
    const words = ['hello', 'my', 'name', 'is', 'Gloria'];
    assert.deepEqual(tail(words)[0], 'my');
  });

  it("returns 'name' for second element of tail(['hello', 'my', 'name', 'is', 'Gloria'])", () => {
    const words = ['hello', 'my', 'name', 'is', 'Gloria'];
    assert.deepEqual(tail(words)[1], 'name');
  });

  it("returns 5 for length of array ['hello', 'my', 'name', 'is', 'Gloria']", () => {
    const words = ['hello', 'my', 'name', 'is', 'Gloria'];
    assert.deepEqual(words.length, 5);
  });

  it("returns 0 for length of array tail(['single'])", () => {
    assert.deepEqual(tail(['single']).length, 0);
  });

  it("returns 0 for length of array tail([])", () => {
    assert.deepEqual(tail([]).length, 0);
  });
});