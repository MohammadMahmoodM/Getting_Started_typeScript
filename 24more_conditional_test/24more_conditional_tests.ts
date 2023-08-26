let car: string = 'subaru'

console.log(car=='subaru', `The condition is ${car=='subaru'}`); // true

console.log(car.toUpperCase()=='subaru', `The condition is ${car.toUpperCase()=='subaru'}`); // false

console.log(car.toUpperCase() !=='subaru', `The condition is ${car.toUpperCase() !=='subaru'}`); // true

let tayota_cat:string = 'TAYOTA'

console.log(tayota_cat=='tayota', `The condition is ${tayota_cat=='tayota'}`); // false

console.log(tayota_cat.toLowerCase()=='tayota', `The condition is ${tayota_cat.toLowerCase()=='tayota'}`); // true

console.log(tayota_cat.toLowerCase() !=='tayota', `The condition is ${tayota_cat.toLowerCase() !=='tayota'}`); // false

let any_number: number = 3;

console.log(any_number > 4, `The condition is ${any_number > 4}`); //false

console.log(any_number >= 3, `The condition is at 3=3 ${any_number >= 3}`); //true

let another_number: number = 3;

console.log(another_number < 4, `The condition is ${another_number < 4} as 3 is smaller`); // true

console.log(another_number <= 3, `The condition is ${another_number <= 3} as 3 is equal`); // true

//  Tests using "and" and "or" operators
let age = 25;
let country = 'USA';

console.log(`is age greater then 20 and country is USA ${age >= 20 && country}`);  //as its OR country condition is statisfy

console.log(`is age greater then 20 and country is USA ${age <= 20 && country}`);  //as its AND country condition is age not statisfy

console.log(`is age greater then 20 and country is USA ${age >= 30 || country}`);  //as its OR country condition is statisfy

// Test whether an item is in a array

let array: string[] = ["apple", "banana", "melonn"]

console.log("Banana equal to" ,array[1] == "banana"); // true as at 1 inde its banana