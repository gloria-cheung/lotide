const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// find key function:
const findKey = function(obj, callback) {
  // makes an array with the obj keys
  let arrKeys = Object.keys(obj); 
  
  for (let el of arrKeys) {
    if (callback(obj[el])) {
      return el;
    } 
  }
};

// tests:
const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(obj1, x => x.stars === 2), "noma");

const friendFromSchool = {
  pharmacy: "Shirley",
  highschool: "Olivia",
  undergrad: "Nasim",
  elementary: "Martha"
};
assertEqual(findKey(friendFromSchool, school => school === "Nasim"), "undergrad");

const whatToEat = {
  sushi: {toronto: "kaka sushi", markham: "kiku sushi"},
  pizza: {northYork: "dominoes pizza", toronto: "pi co"},
  noodles: {mississauga: "noodle fans", rhill: "magic noodle", toronto: "lanzhou noodle"}
};
assertEqual(findKey(whatToEat, food => food.rhill), "noodles");
