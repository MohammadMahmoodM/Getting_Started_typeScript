// make use of if else if and else statement, so that multiple conditions could be tested

let alien_color: string[] = ["green", "yellow", "red", "purple", "pink"]

if (alien_color[1] == "yellow"){
    console.log("If statement, Player Must Earn 5 Points");
}else if(alien_color[1] == "red"){
    console.log("else if statement, Player Must Earn 10 Points");  
}else if(alien_color[3] == "purple"){
    console.log("else if statment, Player Must earn 15 point");
}else {
    console.log("else statment, Player Must earn 20 point");
}
// to make flow reach else if
if (alien_color[1] == "anaconda"){
    console.log("If statement, Player Must Earn 5 Points"); //as code passing trough here that's why this line will also show
}else if(alien_color[1] == "red"){
    console.log("else if statement, Player Must Earn 10 Points");  
}else if(alien_color[3] == "purple"){
    console.log("else if statment, Player Must earn 15 point");
}else {
    console.log("else statment, Player Must earn 20 point");
}

// to make flow reach else
if (alien_color[1] == "anaconda"){
    console.log("If statement, Player Must Earn 5 Points");
}else if(alien_color[1] == "red"){
    console.log("else if statement, Player Must Earn 10 Points");  
}else if(alien_color[3] == "you"){
    console.log("else if statment, Player Must earn 15 point");
}else {
    console.log("else statment, Player Must earn 20 point");
}
//as code passing trough here that's why all line will also show until else fulfilled