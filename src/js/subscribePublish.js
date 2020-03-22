class Event {
  constructor() {
    this.list = {}
  }
  on(key, fn) {
    if (!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  }
  emit() {
    let key = [].shift.call(arguments)
    let fns = this.list[key]
    if (!fns || fns.length === 0) {
      return false
    }
    this.list[key].forEach(fn => {
      fn.apply(this, arguments)
    })
  }
  remove(key, fn) {
    let fns = this.list[key]
    if (!fns) {
      return false
    }
    if (!fn) {
      fns && (fns.length = 0)
    }
    fns.forEach((cb, i) => {
      if (fn === cb) {
        fns.splice(i, 1)
        console.log(`取消${key}订阅成功`)
      }
    })
  }
}
// test
let event = new Event()
function cat() {
  console.log('一起喵喵喵')
}
function dog() {
  console.log('一起旺旺旺')
}

event.on('pet', data => {
  console.log('接收数据')
  console.log(data)
})
event.on('pet', cat)
event.on('pet', dog)
// 取消dog方法的订阅
event.remove('pet', dog)
// 发布
event.emit('pet', ['二哈', '波斯猫'])
