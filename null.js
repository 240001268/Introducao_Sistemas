var age;
console.log(age); // Output: undefined

function doSomething(name) {
    console.log(name);
}
doSomething(); // Output: undefined

let person = {name: 'Person 1'};

console.log(person.name); // Output: undefined
console.log(person.age); // Output: undefined

let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]); // Output: Apple
console.log(fruits[5]); // Output: undefined

var varNull = null;
var initialized;

console.log(varNull==initialized); // Output: true
console.log(varNull===initialized); // Output: false

console.log(typeof null); // Output: object
console.log(typeof undefined); // Output: undefined