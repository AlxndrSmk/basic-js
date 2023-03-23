const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] == '--discard-prev') arr.splice(arr[i - 1], 2);
      if (arr[i + 1] == '--discard-next') arr.splice(arr[i], 2);
      if (arr[i] == '--double-next') arr[i] = arr[i + 1];
      if (arr[i] == '--double-prev') arr[i] = arr[i - 1];
  }
  return arr;
}

module.exports = {
  transform
};
