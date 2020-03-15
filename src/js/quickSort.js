/**
 * @description 快速排序的思想：将数组分成两半，然后和分开边界值进行比较，小的放在左边的数组，大的放右边数组
 * 然后递归拼接起来
 * @param {Array} arr
 */

function quickSort(arr) {
  if (!arr || arr.length === 0) {
    return []
  }
  let cIndex = Math.floor(arr.length / 2)
  let currentt = arr.splice(cIndex, 1)
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < currentt) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(currentt, quickSort(right))
}
console.log(quickSort([1, 2, 8, 3, 4, 7, 0]))
