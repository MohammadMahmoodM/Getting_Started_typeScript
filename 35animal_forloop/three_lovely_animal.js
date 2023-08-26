// make and array of animals, and each time call the name with 
// statment "A animal_from_array is a great pet" and also print your specific faveriot animal in
// separate code from array
var lovely_animals = ["Cat", "Dog", "Rabbit"];
lovely_animals.forEach(function (animal) {
    console.log(animal);
});
lovely_animals.forEach(function (animal) {
    console.log("A ".concat(animal.toLowerCase(), " is a great pet."));
});
console.log("The ".concat(lovely_animals[1], " is great pet to keep at home"));
