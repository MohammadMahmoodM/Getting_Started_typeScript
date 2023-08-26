// if user age is under 2 then its baby if is between 2 and 4 then toddler if its between 4 and 13 then kid if its between 13
// and 20 its teenage if its between 20 and 65 then its adult, if its greater then 65 then elder i just use if its could be done with 
// if else if and else loop

let age_value: number = 1;

//  If the person is less than 2 years old, print a message that the person is a baby.

console.log(age_value < 2, "The person is a baby");

//  If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

let toddler_valve: number = 3;

console.log(toddler_valve > 2 && toddler_valve < 4, "The person is a toddler");

// If the person is at least 4 years old but less than 13, print a message that the person is a kid.

let kid_valve: number = 7;

console.log(kid_valve > 4 && kid_valve < 13, "The person is a kid");

// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

let teenager_value: number = 16;

console.log(teenager_value > 13 && teenager_value < 20, "The person is teenager");

//If the person is at least 20 years old but less than 65, print a message that the person is an adult.

let adult_value: number = 45;

console.log(adult_value > 20 && adult_value < 65, "The person is adult");

//If the person is age 65 or older, print a message that the person is an elder.

let elder_value: number = 70;

console.log(elder_value >= 65, "The person is elder");
