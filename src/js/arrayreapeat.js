/**
 * @description array no repeater
 * @param {Array} array
 * @returns {Array}
 */

function noReapeat(arr) {
  return arr.filter((value, index, arr) => {
    if (arr.indexOf(value) === index) {
      return value
    }
  })
}
console.log(noReapeat([1, 4, 6, 'he', 2, 6, 7, 'he']))
/**
 *@description Use Sets
 * @param {Array} arr
 */

function noReapeatForSet(arr) {
  return [...new Set(arr)]
}

console.log(noReapeatForSet([1, 4, 6, 'he', 2, 6, 7, 'he']))
