//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
//with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//return the new array and store it in a separate array. Call show_magicians() with each array
// to show that you have one array of the original names and one array with the Great added to 
//each magician’s name. 

var magicians_names: string[] = ['A', 'B', 'C', 'D', 'E']

function show_magicians(magicians: string[]): void{
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}

console.log("--Before Updation--");
show_magicians(magicians_names)

function make_great(update_name: string[]): string[]{
    const updated_list = update_name.map(name => `The Great ${name}`)
    return updated_list
}

var updated_list = make_great(magicians_names)
console.log("--After Updation--");

show_magicians(updated_list)