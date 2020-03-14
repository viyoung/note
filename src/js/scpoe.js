//使用es5和es6实现生成10共 标签，点击对应的编号
//es6使用let的块级作用域实现
for (let i = 0; i < 10; i++) {
  let a = document.createElement('a')
  a.innerHTML = `标签${i}<br>`
  a.addEventListener('click', e => {
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
}

//es5,使用自执行函数，函数作用域来保留i;

for (var i = 0; i < 10; i++) {
  ;(function(i) {
    var a = document.createElement('a')
    a.innerHTML = `标签${i} <br>`
    a.addEventListener('click', function(e) {
      e.preventDefault()
      alert(i)
    })
    document.body.appendChild(a)
  })(i)
}
