const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  let newArr = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newArr.push([]);
  }

  matrix.forEach((row) => {
    row.forEach((item, j) => {
      newArr[j].push(item)
    })
  })

  newArr.forEach(row => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) break;
      res += row[i];
    }
  })

  return res;
}

module.exports = {
  getMatrixElementsSum
};
