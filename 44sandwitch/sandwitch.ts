//  Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function 
//  call provides, and it should print a summary of the sandwich that is being ordered.
//   Call the function three times, using a different number of arguments each time.

function desired_items(...items: string[]): void{
    if (items.length ==0){
        console.log("Please Enter something to order");
    }else{
        console.log("Thanks for the order:");
        var r : number = 0
        items.forEach(item => {
           r = r + 1
            console.log(`Your ${r} item is ${item}`);
        });
        console.log(`Your order ${items} are ready`)        
    }
}

desired_items('papsi','lays','ice-cream')


function sum_it(...give_number: number[]): void{
    var result: number = 0
    give_number.forEach(a_number => {
    result = result+a_number
    console.log('In for loop',result);
    });
    console.log('Outside for loop',result);
}
sum_it(3,4,1)