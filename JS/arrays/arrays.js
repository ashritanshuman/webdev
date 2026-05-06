//  1. declare an arrya of teaflowers and access and store it in a variable and print it out.

let teaflowers = ["rose", "jasmine", "chamomile", "lavender", "hibiscus"];
// console.log(teaflowers[0]);
let firstElement = teaflowers[1];
// console.log(firstElement);


// 2. AN array named TeaTypes cantaining 5 teas . change the second elemnt of array to jasmine tea and print the array.

let TeaTypes = ["green tea", "black tea", "oolong tea", "white tea"];
TeaTypes[1] = "jasmine tea";  //element override the index 1.
console.log(TeaTypes);

//3. declare an array cities containing some cities and 

let cities = ["New York", "London", "Paris", "Tokyo", 'Sydney'];
const favcity = cities[2];
// console.log(favcity);


// 4. declare an array named citiesVisited containing 'Mumbai' and 'sydney' add berlin to the array using push() and print the array.

let citiesVisited = ['Mumbai', 'Sydney'];
citiesVisited.push("berlin");
console.log(citiesVisited);  // it add at the end of the array.

// let citiesVisited = ['Mumbai', 'Sydney'];
// // citiesVisited[2] = "berlin"; this also working
// console.log(citiesVisited); 


// 5. remove last elemnt form the arrya using pop() method

let teaorders = ["macha tea", "ice tea", "lemon tea", "ginger tea"];
const lastorder = teaorders.pop();
// console.log(lastorder);  // it prints the removed element.
// console.log(teaorders);  // it prints the array after removing the last element.

// teaorders.pop();  // it remove the last element of the array.
// console.log(teaorders);

// 6 An array named popularTeas containing 5 teas. cretae asoft copy of this array named softCopyTeas

let popularTeas = ["greentea", "black tea", "oolong tea", "white tea", "herbal tea"];
let softCopyTeas = popularTeas
popularTeas.pop();  // it remove the last element of the original array.

// console.log(softCopyTeas);
// console.log(popularTeas);  // it prints the original array


// 7. array named topcities 

let topcities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topcities];
// let hardCopyCities = topcities.slice();

topcities.pop();
// console.log(topcities);
// console.log(hardCopyCities);

// 8. merging two arrays:

let array1 = ["paris", "london", "new york"];
let array2 = ["tokyo", "sydney", "berlin"];

// let mergedArray = [array1,array2] arrays inside an array
// let mergedArray = [...array1, ...array2]; 
let mergedArray = array1.concat(array2)
// console.log(mergedArray);  


// 9. an array named teas containing 5 teas. find the length of an array and store it in a variable named menulength and print it out.

let teas = ["greentea", "black tea", "oolong tea", "white tea", "herbal tea"];
let menulength = teas.length;
// console.log("length of the array: " + menulength);


// 10. array named cityBucketlist cantaining some cities . check if "london is in the array and store the result in the variable named isLondonInList and print it out.
let cityBucketlist = ["paris", "london", "new york", "tokyo", "sydney"];
let isLondonInLIst = cityBucketlist.includes("London") || cityBucketlist.includes("london");

// console.log("Is London in the list ? " + isLondonInLIst);
