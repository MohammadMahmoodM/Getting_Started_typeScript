let car: string = 'subaru'

console.log(car=='subaru', `The condition is ${car=='subaru'}`); // true

console.log(car=='Subaru', `The condition is ${car=='Subaru'}`); //false

console.log(car==='Subaru', `The condition is ${car==='Subaru'}`); //false

console.log(car.length == 6, `The condition is ${car.length == 6}`); //true

console.log(car.length == 4, `The condition is ${car.length == 4}`); //false

console.log(car.charAt(3) ==="a", `The condition is ${car.charAt(3) ==="a"}`); // true

console.log(car.charAt(2) ==="a", `The condition is ${car.charAt(2) ==="a"}`); // false

console.log(typeof car === "string",  `The condition is ${car === "string"}`); // true

console.log(typeof car === "number",  `The condition is ${car === "number"}`); // false

console.log(typeof car == "string",  `The condition is ${car == "string"}`); // true