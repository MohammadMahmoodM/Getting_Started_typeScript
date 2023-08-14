var guest_list = ["Mahmood", "Ali", "Usman"];
// now generate a function which have message so that we should not need to write message for each guest separatly
function invitationMessage(person) {
    return "Dear ".concat(person, ", \n You are invited to the birthday caremoney please come at sunday latenight");
}
// generate a function to send invitation message to each guest
function sendInvitation(guest_list) {
    for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
        var person = guest_list_1[_i];
        var personMessage = invitationMessage(person);
        console.log(personMessage);
    }
}
// Call the function to send invitations
sendInvitation(guest_list);
