const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = n.toString().split('').map(el => parseInt(el, 10)).reduce((a, b) => a + b);
  return res.toString().split('').length < 2 ? res : getSumOfDigits(res);
}

module.exports = {
  getSumOfDigits
};
