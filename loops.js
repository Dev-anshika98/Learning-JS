//while Loop Statement
//statment creates a loop that excutes a specified statement
//as long as the test condition evaluates to true
var num = 20;
//block scope
while(num <= 10){
    console.log(num);
    num++; //infinite
}



//Do- while loop
var num = 20;
do{
    console.log(num);
    num++; //infinite
}while(num <= 10);

//For loop
//for(intializer; condition ;upgradation){
//code to be executed
//}
for(var num = 20; num <=10; num++){
    debugger;
    console.log(num);
}
//J-s program to print table for given no. (8,9,12,15) using for loop?
// js prgram to print table for given no. (8)?
for(var num = 1; num<= 10; num++){
    var tableOf = 8;
    console.log(tableOf +" * " + num + " = " + 8*num);
}
//table of 7

for(var num = 1; num<= 20; num++){
    var tableOf = 7;
    console.log(tableOf +" * " + num + " = " + 7*num);
}
