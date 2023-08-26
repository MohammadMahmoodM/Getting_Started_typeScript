// write program and make and array of different size of pizza
// use for loop to print each pizza in list, use for loop to 
// print "I Like (here define size) Pizza"
// print I really love Pizza
var pizzas = ['small', 'medium', 'large'];
pizzas.forEach(function (pizza) {
    console.log(pizza);
});
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza"));
});
console.log("I really love Pizza");
