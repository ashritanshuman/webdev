// TYPES OF DATATYPES IN JAVASCRIPT:-

// Primitive Data Types in JavaScript
// String, Boolean, Number, Null, Undefined, Symbol

// NON-Primitive Data Types in JavaScript
// Object -> Arrays, Functions, Objects

let num1 = 120;
let num2 = new Number(120);

console.log(num1);
console.log(num2);

// console.log(typeof(num1)); // number
// console.log(typeof num2); // object

// let str1 = "Hello World";
// console.log(typeof(str1)); // string

let bool1 = true;
let bool2 = new Boolean(true);
// console.log(typeof(bool1)); // boolean
// console.log(typeof(bool2)); // object

// null & undefined

// let a;
// console.log(a);


let firstName = null;
let secondName = undefined;

// console.log(firstName); // null
// console.log(secondName); // undefined

// STRING

let myStirng = "Hello";
let myStirng1 = 'Hola';
let username = 'ashrit';

let oldgreeting = myStirng + " " + 'ashrit';
// console.log(oldgreeting);


let newgreetMsg = `hello ${username} !`;
// console.log(newgreetMsg); // hello ashrit

let demo = `the sum of 2 and 3 is ${2 + 3}`;
// console.log(demo); // the sum of 2 and 3 is 5


let sm1 = Symbol("ashrit")
let sm2 = Symbol("ashrit")

// console.log(sm1 == sm2); // false because each symbol is unique even if they have the same description

// console.log(sm1==sm2);




