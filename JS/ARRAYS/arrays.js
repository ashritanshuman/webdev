//  1. declare an arrya of teaflowers and access and dtore it in a variable and print it out.

let teaflowers = ["rose", "jasmine", "chamomile", "lavender", "hibiscus"];
console.log(teaflowers[0]);
let firstElement = teaflowers[0];
console.log(firstElement);


// 2. AN array named TeaTypes cantaining 5 teas . change the second elemnt of array to jasmine tea and print the array.

let TeaTypes = ["green tea", "black tea", "oolong tea", "white tea"];
TeaTypes[1] = "jasmine tea";  //element override the index 1.
console.log(TeaTypes);


//3. declare an array cities containing some cities and 

let cities = ["New York", "London", "Paris", "Tokyo", 'Sydney'];
const favcity = cities[2];
console.log(favcity);


// 4. declare an array named citiesVisited containing 'Mumbai' and 'sydney' add berlin to the array using push() and print the array.

let citiesVisited = ['Mumbai', 'Sydney'];
citiesVisited.push("berlin");
console.log(citiesVisited);  // it add at the end of the array.


// let citiesVisited = ['Mumbai', 'Sydney'];
// // citiesVisited[2] = "berlin"; this also working
// console.log(citiesVisited); 

// 5. remove last elemnt form the arrya using pop() method

let teaorders = ["macha tea", "ice tea", "lemon tea", "ginger tea"];
teaorders.pop();  // it remove the last element of the array.
console.log(teaorders);
