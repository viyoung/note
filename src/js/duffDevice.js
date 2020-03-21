let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 13, 15]
function forLoop(arr) {
  let len = arr.length
  console.time('for循环耗费的时间')
  for (let i = 0; i < len; i++) {}
  console.timeEnd('for循环耗费的时间')
}

function duffDevice(values) {
  let length = values.length
  let iterations = Math.floor(length / 8)
  let leftover = Math.floor(length % 8)
  let i = 0
  console.time('duff循环耗费的时间')
  if (leftover > 0) {
    do {
      //循环要做的事情
      i++
    } while (--leftover > 0)
  }

  do {
    //循环要做的事情，一共做8次,不一定是固定8次，但是循环此时要和数组长度的模或除数相同

    //循环要做的事情
    i++
    //循环要做的事情
    i++
    //循环要做的事情
    i++
    //循环要做的事情
    i++
    //循环要做的事情
    i++
    //循环要做的事情
    i++
    //循环要做的事情
    i++
    //循环要做的事情
    i++
  } while (--iterations > 0)
  console.timeEnd('duff循环耗费的时间')
}

forLoop(arr)
duffDevice(arr)

//原理 在复制时最小化判断数和分支数”所用算法

//for循环耗费的时间: 0.073ms
//duff循环耗费的时间: 0.005ms
