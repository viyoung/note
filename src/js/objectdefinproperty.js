let a = {}
a.x = 1
console.log(a.propertyIsEnumerable('x'))

let b = {}

Object.defineProperty(b, 'name', {
  configurable: true,
  enumerable: true,
  set(newVal) {
    console.log('我的值被改变了')
  },
  get() {
    console.log('我的值被取走了')
  }
})

b.name = 'ruini'
console.log(b)
