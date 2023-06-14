//If-else statement
//the if statement executes a statement if a specified condition is truthy
//if the condition is falsy another statement can be executed
var tomr = 'rain';
if(tomr == 'sunny'){
    console.log('take a raincoat');
}else{
    console.log('No need to take a raincoat');
}

//challenge
var y = 2000;
if((y % 4 == 0 ) && (y%100 != 0) || (y%400==0)){
    console.log('leap year');
}
else{
    console.log('not a leap year');
}
//What is truthy and falsy value in js??
//We have total 5 falsy values in js
// 0,"", undefined , null, NaN, false** is false anyway

if (null){
    
    console.log("omg, we loss the game");
}
else{
    console.log("Yay. We won the game ");
}

// ternary operator
//the conditional (ternary) operator is the only js operator  that takes 3 operand
//variablename = (condition) ? value1:value2
var age = 20;
console.log((age >= 18)? "you can vote": "you can't vote");


//switch statment- evaluates an expression, statement the expresion's value to a 
//case clause and executes statements asssociated with that case.
//1st without breakn statement
//find the area of circle ,trianggle,reactangle


// var area = "square";
// var PI = 3.14 ,l=3,b=4,r=5;
// if(area == "circle"){
//     console.log("the area of circle is :" + PI*r**2);
// }else if(area == "triangle"){
//     console.log("the area of triangle is :" + (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("the area of rectangle is :" + (l*b));
// }else{
//     console.log("pls enter valid data")}


//by switch statement
var area = "hey";
 var PI = 3.14 ,l=3,b=4,r=5;
 switch(area){
    case 'circle':
        console.log("the area of circle is :" + PI*r**2);
        break;
    case 'triangle':
        console.log("the area of triangle is :" + (l*b)/2);
        break;
    case 'rectangle':
        console.log("the area of rectangle is :" + (l*b));
        break;
    default:
        console.log("pls enter valid data");

 }


 