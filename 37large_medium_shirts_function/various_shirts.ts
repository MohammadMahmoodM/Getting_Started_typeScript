// Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
// with the default message, and a shirt of any size with a different message. 

function make_shirt(size: string= "large", message: string = "I love TypeScript"): void{
    console.log(`a shirt of ${size} size make a message "${message}"`);
}

// for default large size and message 

make_shirt();

// for medium size
make_shirt('medium');

//  for small size

make_shirt('small', 'This is small shirt')