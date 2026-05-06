// CONDITIONALS IN JAVASCRIPT:-

let n1 = 7;
let n2 = 37;

if (n1 > n2) {
    // console.log(n1 + " num1 is greater");
} else {
    // console.log(n2 + " num2 is greater");
}


let username = "ashrit";
let Anotherusername = "ashrit";
if (username == Anotherusername) {
    // console.log("both the username are same");
} else {
    // console.log("both the username are different");
}

// if (username != Anotherusername) {
//     console.log("both the username are same");
// } else {
//     console.log("both the username are different");
// }


// checking a var is num or not

let num = 1234;
if (typeof num === 'number') {
    console.log("num is a number");
} else {
    console.log("num is not a number");
}

// 'number' denotes datatype


// === is called the strict equality operator in JavaScript.
/* It checks:

1. Value &
2. Data type

Both must match */


//  2

let isTeaReady = false;

if (isTeaReady) {
    console.log("tea is ready");
} else {
    console.log("tea is not ready");
}


// check if array is empty or not

let myArray = [];

if (myArray.length === 0) {
    console.log("array is empty");
} else {
    console.log("array is NOT empty");
}   

