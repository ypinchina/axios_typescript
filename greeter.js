var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Person;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = new Person('Yi', 'Peng');
console.log(greeter(user));
