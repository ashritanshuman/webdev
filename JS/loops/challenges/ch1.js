// 1. for loop 

let teas = ["green tea", "black tea", "oolong tea", "white tea"];

let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {

    if (teas[i] === "oolong tea") {
        break;
    }

    selectedTeas.push(teas[i]);
    
}

console.log(selectedTeas)

