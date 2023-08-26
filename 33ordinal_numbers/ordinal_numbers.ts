// user for loop and print numbers of an array, and also tell in console.log that this number reach
// in if or else statment

var ordinal_number: string[] = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"]

ordinal_number.forEach(number => {
    if (number){
        console.log(`${number}`);
    }else{
        console.log(`${number} from else`);
    }
});