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

module.exports = findKeyByValue;
