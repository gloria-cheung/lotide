const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("returns true if {a: '1', b: '2'} is equal to {b: '2', a: '1'}", () => {
    const ab = {a: '1', b: '2'};
    const ba = {b: '2', a: '1'};
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("returns true if {b: '2', a: '1'} is equal to {a: '1', b: '2'}", () => {
    const ab = {a: '1', b: '2'};
    const ba = {b: '2', a: '1'};
    assert.deepEqual(eqObjects(ba, ab), true);
  });

  it("returns false if {a: '1', b: '2'} is not equal to {a: '1', b: '2', c: '3'}", () => {
    const ab = {a: '1', b: '2'};
    const abc = {a: '1', b: '2', c: '3'};
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("returns true if {c: '1', d: ['2', 3]} is equal to {d: ['2', 3], c: '1'}", () => {
    const cd = {c: '1', d: ['2', 3]};
    const dc = {d: ['2', 3], c: '1'};
    assert.equal(eqObjects(cd, dc), true);
  });

  it("returns true if {d: ['2', 3], c: '1'} is equal to {c: '1', d: ['2', 3]}", () => {
    const cd = {c: '1', d: ['2', 3]};
    const dc = {d: ['2', 3], c: '1'};
    assert.equal(eqObjects(dc, cd), true);
  });

  it("returns false if {{c: '1', d: ['2', 3]} is not equal to {c: '1', d: ['2', 3, 4]}", () => {
    const cd = {c: '1', d: ['2', 3]};
    const cd2 = {c: '1', d: ['2', 3, 4]};
    
    assert.deepEqual(eqObjects(cd, cd2), false);
  });

  it("returns false if {c: '1', d: [1, '2', 3, 4]} is not equal to {c: '1', d: ['2', 3, 4]}", () => {
    const cd3 = {c: '1', d: [1, '2', 3, 4]};
    const cd2 = {c: '1', d: ['2', 3, 4]};
    
    assert.deepEqual(eqObjects(cd3, cd2), false);
  });
});