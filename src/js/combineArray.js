// 将二维数组拍平并排序
function combineArray(array) {
  return array.reduce((a, b) => a.concat(b, []).sort((a, b) => a - b))
}

console.log(
  combineArray([
    [1, 2, -1],
    [6, 7, 3]
  ])
)
//[ -1, 1, 2, 3, 6, 7 ]
