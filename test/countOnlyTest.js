const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly", () => {
  it("returns 1 after counting how many times 'Jason' appears in firstNames array given we count 'Jason'", () => {
    const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];
    const whatToCount = { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false };
    assert.deepEqual(countOnly(firstNames, whatToCount)['Jason'], 1);
  });

  it("returns undefined after counting how many times 'Karima' appears in firstNames array given we don't count 'Karima'", () => {
    const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];
    const whatToCount = { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false };
    assert.deepEqual(countOnly(firstNames, whatToCount)['Karima'], undefined);
  });

  it("returns 2 after counting how many times 'Fang' appears in firstNames array given we count 'Fang'", () => {
    const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];
    const whatToCount = { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false };
    assert.deepEqual(countOnly(firstNames, whatToCount)['Fang'], 2);
  });

  it("returns undefined after counting how many times 'Agouhanna' appears in firstNames array given we don't count 'Agouhanna'", () => {
    const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];
    const whatToCount = { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false };
    assert.deepEqual(countOnly(firstNames, whatToCount)['Agouhanna'], undefined);
  });
});