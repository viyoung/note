/**
 * @description 找出字符找那个出现频率做多的字符和出现的次数
 * @param {String} str
 * @returns {Object}
 */

function getChar(str) {
  if (typeof str !== 'string') {
    return str
  }
  //1、对字母出现次数计数
  let keyObj = {}
  for (let i = 0; i < str.length; i++) {
    if (keyObj[str[i]] === undefined) {
      keyObj[str[i]] = 1
    } else {
      keyObj[str[i]]++
    }
  }
  // 2、找出出现频率最高的字母和对应的次数
  let currentCharmax = 0
  let currentChar = ''
  for (let key in keyObj) {
    if (keyObj[key] > currentCharmax) {
      currentChar = key
      currentCharmax = keyObj[key]
    }
  }
  // 3、找出和最大值相同数量的字母全部输出
  let getCharReturn = { [currentChar]: currentCharmax }
  for (let key in keyObj) {
    if (keyObj[key] === currentCharmax && key !== currentChar) {
      getCharReturn[key] = keyObj[key]
    }
  }
  for (let key in getCharReturn) {
    console.log(`出现次数最多的字母是${key},次数是${getCharReturn[key]}次`)
  }
}

getChar('aaaaabbbccdf3grggggdd')
