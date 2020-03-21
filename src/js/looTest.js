/**
 * @description 程序的作用就是检测node和浏览器中对于数组循环的性能差异
 */

let array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
]

function forLoop(array) {
  let len = array.length
  console.time('for循环时间')
  for (let i = 0; i < len; i++) {}
  console.timeEnd('for循环时间')
}
forLoop(array)

function forOfLoop(array) {
  console.time('forOf循环时间')
  for (let i of array) {
  }
  console.timeEnd('forOf循环时间')
}
forOfLoop(array)

function forEachLoop(array) {
  console.time('forEach循环时间')
  array.forEach((value, index, array) => {})
  console.timeEnd('forEach循环时间')
}
forEachLoop(array)
function whileLoop(array) {
  let len = array.length
  let i = 0
  console.time('while 循环时间')
  while (i < len) {
    i++
  }
  console.timeEnd('while 循环时间')
}
whileLoop(array)

function doWhileLoop(array) {
  let len = array.length
  let i = -1
  console.time('doWhile循环时间')
  do {
    i++
  } while (i < len)
  {
    i++
  }
  console.timeEnd('doWhile循环时间')
}
doWhileLoop(array)

// nodeJs 12.16.1 macOS
/**
 *for循环时间: 0.075ms
 *forOf循环时间: 0.011ms
 *forEach循环时间: 0.013ms
 *while 循环时间: 0.004ms
 *doWhile循环时间: 0.004ms
 *
 */

// chrome  80.0.3987.132 版本 macOS

/**
 *for循环时间: 0.004150390625ms
 *forOf循环时间: 0.005859375ms
 *forEach循环时间: 0.01513671875ms
 *while 循环时间: 0.00390625ms
 *doWhile循环时间: 0.001708984375ms
 */
