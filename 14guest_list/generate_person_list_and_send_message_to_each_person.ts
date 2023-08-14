const guest_list: string[] = ["Mahmood", "Ali", "Usman"]

// now generate a function which have message so that we should not need to write message for each guest separatly

function invitationMessage(person: string): string{
    return `Dear ${person}, \n You are invited to the birthday caremoney please come at sunday latenight`
}

// generate a function to send invitation message to each guest

function sendInvitation(guest_list: string[]): void{
    for (let person of guest_list){
        const personMessage = invitationMessage(person);
        console.log(personMessage);
        
    }
}

// Call the function to send invitations
sendInvitation(guest_list);