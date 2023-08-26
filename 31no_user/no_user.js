// write a program If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// // If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager. 
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//If the person is age 65 or older, print a message that the person is an elder.
// and is user list is empty then print a message"user list is empty" else print the name of members in the list,
// and at the end use aplice to delete all user from lists, if still not delete all user make a check and print 
// "still these uesrs are not deleted"
var baby_value = 1;
//  If the person is less than 2 years old, print a message that the person is a baby.
console.log(baby_value < 2, "The person is a baby");
//  If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
var toddler_valve = 3;
console.log(toddler_valve > 2 && toddler_valve < 4, "The person is a toddler");
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
var kid_valve = 7;
console.log(kid_valve > 4 && kid_valve < 13, "The person is a kid");
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
var teenager_value = 16;
console.log(teenager_value > 13 && teenager_value < 20, "The person is teenager");
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
var adult_value = 45;
console.log(adult_value > 20 && adult_value < 65, "The person is adult");
//If the person is age 65 or older, print a message that the person is an elder.
var elder_value = 70;
console.log(elder_value >= 65, "The person is elder");
// 31 part
var users = ["Mahmood", "Ali", "Usman", "Umar"];
if (users.length == 0) {
    console.log("We need to find more Users");
}
else {
    users.forEach(function (user) {
        console.log("we have this user in list ".concat(user));
    });
}
// deleting users
users.splice(0, users.length);
// checking either deletion works successfuly or something left behind
if (users.length == 0) {
    console.log("All the users has been deleted");
}
else {
    console.log("Users are still in the list something went wrong");
}
