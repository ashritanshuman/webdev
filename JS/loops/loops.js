//  LOOPS:

/* for (initialization; condition; iteration) {
  body of the loop
} */

// 1. 
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;

}
console.log(sum);


let i = 0;
let s = 0;

while (i <= 5) {
  s += i;
  i++;

}
console.log(s);


// 2.
let countdown = [];
let j = 1;

while (j<=5) {
  countdown.push(j);
  j++;

}

console.log(countdown);

// 3.


// let teaCollection = [];
// let tea;

// do {
//   tea = prompt("enter your favourite tea: ")

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop"); 

/* types: 
1. for loop
2. while loop
3. do...while loop
4. for...in loop
5. for...of loop 

*/

// 4.

let multipliednums = [];
let nums = [1, 2, 3, 4, 5];

let k = 2;

for (let i = 0; i < nums.length; i++) {
  multipliednums.push(nums[i] * k);
  // const element = nums[i];
}
console.log(multipliednums);

// 5.

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

let cityList = [];

for (let i = 0; i < cities.length; i++) {
  const myCity = cities[i];
  cityList.push(myCity);
}

console.log(cityList);
