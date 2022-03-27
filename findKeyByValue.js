const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let result = "";
  for (let el of Object.keys(obj)) {
    if (obj[el] === value) {
      result = el;
    }
  }
  if (!result) {
    return undefined;
  } else {
    return result;
  }
};

// tests:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const friendFromSchool = {
  pharmacy: "Shirley",
  highschool: "Olivia",
  undergrad: "Nasim",
  elementary: "Martha"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(friendFromSchool, "Shirley"), "pharmacy");
assertEqual(findKeyByValue(friendFromSchool, "Nasim"), "undergrad");
assertEqual(findKeyByValue(friendFromSchool, "Martha"), "elementary");
assertEqual(findKeyByValue(friendFromSchool, "Andrew"), undefined);
