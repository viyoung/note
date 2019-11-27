/**
 * @description 字符串某指定位置替换为*
 * @param {string} str 替换的字符串
 * @param {number} start 替换的起始位置
 * @param {number} end 替换的终了位置
 */

function stringEncry(str, start, end) {
  if (!str) {
    throw new Error(`替换值是必须的`)
  }
  if (!start) {
    throw new Error(`替换位置是必须的 ，但是入参为${typeof start}`)
  }
  if (!end) {
    throw new Error(`替换位置是必须的 ，但是入参为${typeof end}`)
  }
  if (start < 0) {
    throw new Error('start 必须大于等于0')
  }
  if (end > str.length - 1) {
    throw new Error('替换位置不合法')
  }
  if (end - start > str.length) {
    throw new Error('替换长度不能大于替换字符串长度')
  }
  let st = str.slice(start, end)
  let rep = '*'
  for (let i = 0; i < end - start; i++) {
    rep += '*'
  }
  return str.replace(new RegExp(st, 'g'), rep)
}
console.log(stringEncry('13474335166', 3, 7))
