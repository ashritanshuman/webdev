let teaTypes = ["green tea", "black tea ","herbal tea", "chai" ]

let preferredTeas = [];

for (const tea of teaTypes) {
    if (tea === "herbal tea") {
        continue;
    }    
    preferredTeas.push(tea)
}

console.log(preferredTeas);
