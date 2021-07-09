for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i)
  }, 100)
}
// 异步的setTimeout var 输出 10个10， let可以正常输出0 - 9
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i)
  }, 100)
}
//  let 不允许重复声明同一个变量， 不允许在先使用后声明，let会自动生成一个块级作用域