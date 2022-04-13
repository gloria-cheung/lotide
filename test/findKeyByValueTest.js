const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  it("returns 'drama' after looking in object using value 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it("returns undefined after looking in object using value 'That 70s Show'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'That 70s show'), undefined);
  });

  it("returns 'pharmacy' after looking in object using value 'Shirley'", () => {
    const friendFromSchool = {
      pharmacy: "Shirley",
      highschool: "Olivia",
      undergrad: "Nasim",
      elementary: "Martha"
    };
    assert.deepEqual(findKeyByValue(friendFromSchool, 'Shirley'), 'pharmacy');
  });

  it("returns 'undergrad' after looking in object using value 'Nasim'", () => {
    const friendFromSchool = {
      pharmacy: "Shirley",
      highschool: "Olivia",
      undergrad: "Nasim",
      elementary: "Martha"
    };
    assert.deepEqual(findKeyByValue(friendFromSchool, 'Nasim'), 'undergrad');
  });

  it("returns 'elementary' after looking in object using value 'Martha'", () => {
    const friendFromSchool = {
      pharmacy: "Shirley",
      highschool: "Olivia",
      undergrad: "Nasim",
      elementary: "Martha"
    };
    assert.deepEqual(findKeyByValue(friendFromSchool, 'Martha'), 'elementary');
  });

  it("returns undefined after looking in object using value 'Andrew'", () => {
    const friendFromSchool = {
      pharmacy: "Shirley",
      highschool: "Olivia",
      undergrad: "Nasim",
      elementary: "Martha"
    };
    assert.deepEqual(findKeyByValue(friendFromSchool, 'Andrew'), undefined);
  });
});