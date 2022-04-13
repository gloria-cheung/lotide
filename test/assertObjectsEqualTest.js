const assertObjectsEqual = require("../assertObjectsEqual");

// tests:
assertObjectsEqual({a: "1", b: "2"}, {b: "2", a: "1"});
assertObjectsEqual({b: "2", a: "1"}, {a: "1", b: "2"});
assertObjectsEqual({d: ["2", 3], c: "1"}, {c: "1", d: ["2", 3]});
assertObjectsEqual({c: "1", d: ["2", 3]}, {d: ["2", 3], c: "1"});
assertObjectsEqual({a: "1", b: "2", c: "3"}, {a: "1", b: "2"});
assertObjectsEqual({b: "2", a: "1"}, {a: "1", b: "2", c: "3"});
assertObjectsEqual({c: "1", d: ["2", 3, 4]}, {a: "1", b: "2", c: "3"});
assertObjectsEqual({b: "2", a: "1"}, {c: "1", d: ["2", 3, 4]});
assertObjectsEqual({c: "1", d: [1, "2", 3, 4]}, {c: "1", d: ["2", 3, 4]});
assertObjectsEqual({b: "2", a: "1"}, {c: "1", d: [1, "2", 3, 4]});

