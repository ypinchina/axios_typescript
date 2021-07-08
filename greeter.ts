class Person {
  firstName: string
  lastName: string
  fullName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}


interface personName {
  firstName: string,
  lastName: string
}
function greeter(person: personName) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}
let user = new Person('Yi', 'Peng')
console.log(greeter(user))