// write a program is the employee is Admin then print "Greeting Admin, would you like to see a status report?"
// if the is not admine then print "Hello User_Name, thank you for logging in again."
var five_employee: string[] = ["Admin", "Mahmood", "Ali", "Hader", "Usman"]

five_employee.forEach(employee => {
    if (employee.toLowerCase() == "admin"){
        console.log(`Greeting ${employee}, would you like to see a status report?`);
}});

five_employee.forEach(employee => {
    if(employee.toLowerCase() !== "admin"){
        console.log(`Hello ${employee}, thank you for logging in again.`);
        
    }
});
