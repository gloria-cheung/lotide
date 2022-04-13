const without = function(sourceArr, itemsToRemoveArr) {
  let result = [];
  for (let i = 0; i < sourceArr.length; i ++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
      result.push(sourceArr[i]);
    }
  }
  return result;
};

module.exports = without;
