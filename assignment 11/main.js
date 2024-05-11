"use strict";
//Array
Object.defineProperty(exports, "__esModule", { value: true });
//Defines an array of names
let names = ["Shazia", "Rabia", "Mehak", "Hina", "Kainat"];
//loop
//for each
//for loop
for (let i = 0; i < names.length; i++) {
    console.log(names, i);
}
//for each
names.forEach(name => {
    console.log(names);
    //for of loop
    for (let friendName of names) {
        console.log(friendName);
    }
});
