// Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
// with the default message, and a shirt of any size with a different message. 
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("a shirt of ".concat(size, " size make a message \"").concat(message, "\""));
}
// for default large size and message 
make_shirt();
// for medium size
make_shirt('medium');
//  for small size
make_shirt('small', 'This is small shirt');
