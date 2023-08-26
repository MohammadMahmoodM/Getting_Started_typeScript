// make and array of animals, and each time call the name with 
// statment "A animal_from_array is a great pet" and also print your specific faveriot animal in
// separate code from array

var lovely_animals : string[] = ["Cat","Dog","Rabbit"]

lovely_animals.forEach(animal => {
    console.log(animal);
})

lovely_animals.forEach(animal => {
    console.log(`A ${animal.toLowerCase()} is a great pet.`);
})

console.log(`The ${lovely_animals[1]} is great pet to keep at home`);
