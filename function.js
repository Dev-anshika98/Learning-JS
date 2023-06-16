// Function in j-s
//A javascript function is a block of code designed to perform a particular task

// Function Definition
//Before we use a function ,we need to define it.
//A function definition(also called a function declaration ,or function staement)
//consits of the function ,followed by:
//1- name of function
//a list of parameters to the function ,enclosed in  parentheses and separated by comas.
//the javascript statements that define the function ,enclosed in curly brackets {...}.
 


//How to define a function
// sum();
//function functionName()
//{statement}
function sum(){
    var a = 10, b = 20;
    var total = a+b;
    console.log(total);
}

//calling functions
//Defining a function does not execute it.
//a js function is executed when "something" invokes it (calls it).


 // What is the difference between "Function pararmeter" vs "Function argument"
 // function parameters are the names listed in the function's  definition
 //function arguments are the real values passed to the function.

 function product(a,b){ //pararmeters
    var total = a*b;
    console.log(total);
}
product(20 ,30);// arguments
product(4,3);

// Function expression
//Function expressions simle means to create a function and put it into the variable..

function sub(a,b){ //pararmeters
    var total = a-b;
    console.log(total);
}
var funExp = sub(40,30);// arguments

//Return keyword
//when Javascpript reaches a return statement, the function will stop executing
//Functions often compue a return value. 
//the return value is "returned" back to the "caller"

function sub(a,b){ //pararmeters
    return total = a-b
} var funExp = sub(10,4);

console.log("the sub of two no is " + funExp);

//Anonymous Function
//a function expression is similar to end and has the same syntax as a function decalaration
//one can define "named"
//function expression (where the name of the expression might be used in the call stack for ex.)
//or"anonymous" function expressions

var funExp = function(a,b){ //pararmeters
    return total = a+b
}                               //this whole named function expression and half named anonymous function expressiob
   var sum1 = funExp(12,12);
   var sum2 = funExp(13,2)
   console.log(sum2);
console.log(sum1> sum2);