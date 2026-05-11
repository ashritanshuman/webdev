let teaCollection = ["greeen tea", "oolong tea", "chai", "black tea" ];

let availableTeas = [];

teaCollection.forEach(function(tea) {
    if (tea === "chai") {
        // break; // error   
        return 0;
    }
    availableTeas.push(tea);
});

console.log(availableTeas);

// function hello() {
//     console.log("abc")

// }

// () => {
//     console.log("abc");
    
// }

