var animal = {
    name: 'tigel',
    age: 1
};
animal.name = 'rabbit';
console.log(animal);
// const 声明过的变量不能再进行重新赋值，但是可以修改引用型变量内的属性值，因为只要不改变引用就好
// 通常情况下使用const，除非你有计划未来要改变声明对象的值，才会用let 
