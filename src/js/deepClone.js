/**
 * @description 对js常用类型进行深拷贝方法
 * @param {Number|String|Boolean|Object|Date|RegExp} oldObj
 */

function deepClone(oldObj) {
  if (!oldObj) {
    return ''
  }
  let deepCloneMethods = function(oldObj) {
    let newObj = {}
    let baseClone = function(value) {
      return value.valueOf()
    }
    if (typeof oldObj !== 'object') {
      newObj = baseClone(oldObj)
    } else {
      let type = Object.prototype.toString.call(oldObj)
      switch (type) {
        case '[object Array]':
          newObj = []
          for (let i = 0; i < oldObj.length; i++) {
            newObj.push(oldObj[i])
          }
          break
        case '[object Object]':
          newObj = {}
          for (let key in oldObj) {
            if (typeof oldObj[key] !== 'object') {
              newObj[key] = oldObj[key]
            } else {
              newObj[key] = deepCloneMethods(oldObj[key])
            }
          }
          break
        case '[object Date]':
          Date.prototype.clone = function() {
            return new Date(this.valueOf())
          }
          let data = new Date(oldObj)
          newObj = data.clone()
          break
        case '[object RegExp]':
          RegExp.prototype.clone = function() {
            let pattern = this.valueOf()
            let flag = ''
            flag += pattern.global ? 'g' : ''
            flag += pattern.ignoreCase ? 'i' : ''
            flag += pattern.multiline ? 'm' : ''
            return new RegExp(pattern.source, flag)
          }
          let reg = new RegExp(oldObj)
          newObj = reg.clone()
          break
        case '[object Boolean]':
          newObj = baseClone(oldObj)
          break
        case '[object Number]':
          newObj = baseClone(oldObj)
          break
        case '[object String]':
          newObj = baseClone(oldObj)
          break
        default:
          newObj = ''
          break
      }
    }
    return newObj
  }
  return deepCloneMethods(oldObj)
}

console.log(
  deepClone({
    a: 1,
    b: Date.now(),
    c: { a: 2 },
    d: [1, 2, 5, '7'],
    f: new RegExp('/111/g')
  })
)
