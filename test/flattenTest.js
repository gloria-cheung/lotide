const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 1, 2, 2, 3, 4, 4] for [1, [1, 2], [2, 3], 4, 4]", () => {
    assert.deepEqual(flatten([1, [1, 2], [2, 3], 4, 4]), [1, 1, 2, 2, 3, 4, 4]);
  });


  it("returns [0, 1, 1, 9, 9, 9] for [0, [1, 1], [9, 9, 9]]", () => {
    assert.deepEqual(flatten([0, [1, 1], [9, 9, 9]]), [0, 1, 1, 9, 9, 9]);
  });


  it("returns [1, 'hello', 'goodbye', 4, 6, 'hello'] for [1, ['hello', 'goodbye'], 4, 6, 'hello']", () => {
    assert.deepEqual(flatten([1, ["hello", "goodbye"], 4, 6, "hello"]), [1, 'hello', 'goodbye', 4, 6, 'hello']);
  });

  it("returns ['light', 'house', 'lighthouse'] for ['light', 'house', ['lighthouse']]", () => {
    assert.deepEqual(flatten(['light', 'house', ['lighthouse']]), ['light', 'house', 'lighthouse']);
  });
});
