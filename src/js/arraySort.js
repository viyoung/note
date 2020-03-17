function arraySort(arr) {
  arr.sort((a, b) => {
    return b - a
  })
}
let arr = [1, 5, -1, 4, 2]
arraySort(arr)
console.log(arr)
