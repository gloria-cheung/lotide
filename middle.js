const middle = function(arr) {
  let result = [];
  if (arr.length <= 2) {
    return result;
  } else if (arr.length % 2 === 1) {
    let idx = (arr.length - 1) / 2;
    result.push(arr[idx]);
  } else {
    let idx = arr.length / 2;
    result.push(arr[idx - 1]);
    result.push(arr[idx]);
  }
  return result;
};

module.exports = middle;