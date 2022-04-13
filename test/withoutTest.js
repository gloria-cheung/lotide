const without = require("../without");
const assert = require("chai").assert;

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3] without [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] for ['1', '2', '3'] without [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });

  it("returns ['1', '2', 4, 10, 'hello'] for ['1', '2', '3', 4, 10, 'hello'] without [1, 2, '3', 'abc', 44]", () => {
    assert.deepEqual(without(['1', '2', '3', 4, 10, 'hello'], [1, 2, '3', 'abc', 44]), ['1', '2', 4, 10, 'hello']);
  });

  it("returns ['1'] for ['1', '2', '3'] without [1, '2', '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, '2', '3']), ['1']);
  });

  it("returns [] for [1, 2, '3'] without [1, 2, '3']", () => {
    assert.deepEqual(without([1, 2, '3'], [1, 2, '3']), []);
  });

  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse'] without ['lighthouse']", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']);
  });
});
