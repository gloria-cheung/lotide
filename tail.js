const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

// test cases:
const words = ["hello", "my", "name", "is", "Gloria"];
tail(words);
assertEqual(tail(words).length, words.length - 1);
assertEqual(tail(words)[0], "my");
assertEqual(tail(words)[1], "name");
assertEqual(words.length, 5);

const word = ["single"];
assertEqual(tail(word).length, 0);

const empty = [];
assertEqual(tail(empty).length,0);

