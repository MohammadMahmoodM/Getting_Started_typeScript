// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

var magician_names: string [] = ['A', 'B', 'C', 'D', 'E'];

function show_magicians(magicians: string[]): void{
    magicians.forEach(magician => {
        console.log(magician)
    });
}

show_magicians(magician_names)