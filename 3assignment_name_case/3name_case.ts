// Storing the person's name in a variable
let personName: string = "mahmood"

// Printing the message with the person's name defiened/desired case.
console.log(`Lower Case, ${personName.toLowerCase()}`)

console.log(`Upper Case, ${personName.toUpperCase()}`)

console.log(`Title Case, ${personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()}`)

//charAt(0) picking index at 0 and charAt target only those index which we providing, and slice(1) targting onward from given index