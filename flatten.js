const flatten = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i ++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result.push(...arr[i]);
    }
  }
  return result;
};

module.exports = flatten;

