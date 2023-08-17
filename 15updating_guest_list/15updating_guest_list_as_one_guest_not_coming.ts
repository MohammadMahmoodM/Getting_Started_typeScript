var guestList: string[] = ["Mahmood", "Ali", "Usman"]

// create the message

function invitaitonMessage(person: string): string{
    return `Dear ${person}, \n You are invited to the birthday caremoney please come at sunday latenight`
}

// generate a function to send invitation message to each guest

function sendInvitaion(guestList: string[]): void{
    for (let person of guestList){   // if i used "in" in place of "of" then it return index
        const personMessage = invitaitonMessage(person)
        console.log(personMessage);
    }
}
//calling of function, else funtion stay dead until you call them
sendInvitaion(guestList);

var not_comming_guest_index = guestList.indexOf("Ali")

console.log(`${guestList[not_comming_guest_index]}, can't coming because of work`)

var new_guest_name = "Abdullah"

console.log(`We added another Guest ${new_guest_name}, to our birthday caremoney`);

guestList[not_comming_guest_index] = new_guest_name;

console.log('Now we have updated our guest list');
// calling again function with updated list
sendInvitaion(guestList);