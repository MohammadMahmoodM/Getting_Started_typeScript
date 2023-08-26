//Great Magicians: Start with a copy of your program from Exercise 39. Write a function 
// called make_great()  that modifies the array of magicians by adding the phrase the Great
// to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician_names = ['A', 'B', 'C', 'D', 'E'];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
console.log("===Name===");
show_magicians(magician_names);
// 
function make_great(to_great) {
    to_great.forEach(function (great) {
        console.log("The Great ".concat(great));
    });
}
console.log("===The Great===");
make_great(magician_names);
