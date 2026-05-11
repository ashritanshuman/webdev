// 2.

let cities = ["new york", "los angeles", "chicago", "houston", "phoenix"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    
    if (cities[i] === "chicago" || cities[i] === "Chicago") {
        continue;
    }

    visitedCities.push(cities[i]);
}
console.log(visitedCities);

