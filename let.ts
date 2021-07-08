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