var current_users = ["Mahmood", "Ali", "Usman", "Hader", "Aisha"];
var new_users = ["Ali", "Fatima", "Hader", "Ahad", "Ahmad"];
new_users.forEach(function (new_user) {
    var new_user_uper_cased = new_user.toUpperCase();
    var desired_user_name = current_users.some(function (current_user) { return current_user.toUpperCase() === new_user_uper_cased; });
    if (desired_user_name) {
        console.log("".concat(new_user.toUpperCase(), " is not Available"));
    }
    else {
        console.log("".concat(new_user.toUpperCase(), " ia available"));
    }
});
