//  Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function 
//  call provides, and it should print a summary of the sandwich that is being ordered.
//   Call the function three times, using a different number of arguments each time.
function desired_items() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length == 0) {
        console.log("Please Enter something to order");
    }
    else {
        console.log("Thanks for the order:");
        var r = 0;
        items.forEach(function (item) {
            r = r + 1;
            console.log("Your ".concat(r, " item is ").concat(item));
        });
        console.log("Your order ".concat(items, " are ready"));
    }
}
desired_items('papsi', 'lays', 'ice-cream');
function sum_it() {
    var give_number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        give_number[_i] = arguments[_i];
    }
    var result = 0;
    give_number.forEach(function (a_number) {
        result = result + a_number;
        console.log('In for loop', result);
    });
    console.log('Outside for loop', result);
}
sum_it(3, 4, 1);
