// 接口的继承 与接口的多继承
interface Animal {
  type: string
  leg: number
}
interface Pet {
  getMethod: string
}
interface Dog extends Animal, Pet {

}
let dog = {} as Dog
dog.type = '犬科'
dog.leg = 4
dog.getMethod = 'Buy'
console.log(dog)
