
let worldCities = {
        London: 8900000,
        NewYork: 5660000,
        Paris: 45000,
        Berlin: 4500045
};

let largeCities = {};

for (const city in worldCities) {
    if (worldCities[city] < 4500000){

        continue;
    }

    largeCities[city] = worldCities[city];

}

console.log(largeCities);
