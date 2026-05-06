// OBJECTS IN JAVASCRIPT ARE NON-PRIMITIVE DATA TYPES

const username = {
    firstName: "Ashrit",
    lastName: "Anshuman",
    isloggedin: true,

};
username.firstName = "Mr. X"; // we can change the value of the property of an object even if the object is declared as const because we are not reassigning the object, we are just changing the value of the property of the object values are mutable but the reference to the object is immutable.



username.age = 25; // we can also add new properties to the object
// console.log(username.firstName);
// console.log(typeof(username));

// console.log(username);

// const myFisrstName = "ashrit anshuman";
// myFisrstName = "Mr. A";

// console.log(myFisrstName);

// ARRAYS IN JAVASCRIPT ARE ALSO OBJECTS:-

let heroes = ["Batman", "Superman", "Spiderman", true, 123, null, undefined, {name: "Ashrit"}, [1, 2, 3] ];
// console.log(heroes);

let anotherUser = ["ashrit", true];
// console.log(anotherUser[0]);

// console.log(1+"1");

let a = true;
// console.log(a+1);  // js considered as 1 in case of true and 0 in case of false.




// let c = "2abc";
let c = "2";
// console.log(Number(c));

// console.log(Number(null)); //conversion

console.log(Number(undefined));

