// make the comparision of of two arrays, if the current_users array have some names, if new array have these names 
// then print  this user name not avaible if new array does not have these name in previous array then print this user name
// is available.
var current_users: string[] = ["Mahmood", "Ali", "Usman", "Hader", "Aisha"]

var new_users: string[] = ["Ali", "Fatima", "Hader", "Ahad", "Ahmad"]

new_users.forEach(new_user => {
    var new_user_uper_cased = new_user.toUpperCase();
    var desired_user_name = current_users.some(current_user => current_user.toUpperCase() === new_user_uper_cased)
    if (desired_user_name){
        console.log(`${new_user.toUpperCase()} is not Available`);
    }else{
        console.log(`${new_user.toUpperCase()} ia available`);
    }
});