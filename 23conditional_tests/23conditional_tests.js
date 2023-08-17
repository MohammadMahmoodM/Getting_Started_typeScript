var car = 'subaru';
console.log(car == 'subaru', "The condition is ".concat(car == 'subaru')); // true
console.log(car == 'Subaru', "The condition is ".concat(car == 'Subaru')); //false
console.log(car === 'Subaru', "The condition is ".concat(car === 'Subaru')); //false
console.log(car.length == 6, "The condition is ".concat(car.length == 6)); //true
console.log(car.length == 4, "The condition is ".concat(car.length == 4)); //false
console.log(car.charAt(3) === "a", "The condition is ".concat(car.charAt(3) === "a")); // true
console.log(car.charAt(2) === "a", "The condition is ".concat(car.charAt(2) === "a")); // false
console.log(typeof car === "string", "The condition is ".concat(car === "string")); // true
console.log(typeof car === "number", "The condition is ".concat(car === "number")); // false
console.log(typeof car == "string", "The condition is ".concat(car == "string")); // true
