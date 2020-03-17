/**
 *@description 数组求和
 * @param {Array} arr
 */

function arrSum(arr) {
  return arr.reduce((a, b) => a + b)
}

console.log(arrSum([1, 2, 3, 4, 5, 6]))
