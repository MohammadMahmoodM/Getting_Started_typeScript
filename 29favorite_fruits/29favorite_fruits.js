// make and array have fruit names, if array call array with indes if value match in if statment
// then print the name i really like "That fruit name"
var favorite_fruits = ["Mango", "Banana", "PineApple"];
if (favorite_fruits[2] == "PineApple") {
    console.log("I really like ".concat(favorite_fruits[2]));
}
// checking false condition it must not show result
if (favorite_fruits[2] == "Mango") {
    console.log("I really like ".concat(favorite_fruits[2]));
}
// true checking
if (favorite_fruits[0] == "Mango") {
    console.log("I really like ".concat(favorite_fruits[0]));
}
//False checking
if (favorite_fruits[0] == "Banana") {
    console.log("I really like ".concat(favorite_fruits[0]));
}
// True checking
if (favorite_fruits[1] == "Banana") {
    console.log("I really like ".concat(favorite_fruits[1]));
}
