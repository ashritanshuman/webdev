// objects

let citiesPopulation = {
    London : 8900000,
    "New York" : 5660000,
    Paris : 450000,
    Berlin : 4500045
};


let newCityPopulation = {}  //empty object

// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
    console.log(citiesPopulation[city]);
    
    // if (city === "Berlin") {
    //     break
    // }
    
    newCityPopulation[city] = citiesPopulation[city];    
}

console.log(newCityPopulation);
