// Cars: Write a function that stores information about a car in a Object. The function 
// should always receive a manufacturer and a model name. It should then accept an arbitrary
// number of keyword arguments. Call the function with the required information and two other
// name-value pairs, such as a color or an optional feature. Print the Object that’s returned 
// to make sure all the information was stored correctly.
function carstructure(company, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var object_return = {
        company: company,
        model: model
    };
    kwargs.forEach(function (key, value) {
        if (kwargs[value + 1] !== undefined) {
            object_return[key] = kwargs[value + 1];
        }
    });
    return object_return;
}
var result = carstructure("Toyota", "Crolla", "Built Year", "2017", "Driven KM", 75000);
console.log(result);
