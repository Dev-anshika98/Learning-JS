// // Expressions And Operators!!
// // Expressions-The combination of operators and operands.

// // assignment opertors!!
// var x = 6;
// var y = 7;
// console.log( x == y);
// console.log(`is both the x and y are equal : ${x == y}`);
  
// // Arithmatic operators!!
// console.log(3+2);
// console.log(10-4);
// console.log(30/2);
// console.log(3*8);
// console.log(19%3);
// console.log("Remainder operator " + 19%8);

// // Increment and Decrement operator
// var n = 15;
// var p = ++n + 6;
// console.log(n);
// console.log(p);

//Equal operator
 var a=3;
 var b=3;
 console.log(a == b);
//not equal operator
var a= 5;
var b= 4;
console.log(a == b);
//Greater than (>)
var a= 5;
var b= 4;
console.log(a > b);
//less than (<)
var a= 5;
var b= 7;
console.log(a<b);
//Greater than or equal to(<=)
var a= 6;
var b= 6;
console.log(a>=b);
//Logical operators
//logical operators are typically used with boolean (logical) values;
//when they are,they return a boolean value.
var a = 30;
var b = -20;
console.log( a>b&&a>0);//logical AND (&&) if both conditions are true then true
console.log(a<b||b<0);//logical OR (||)if only one or more condition true then true
console.log(!(a>0)&&(b<0));
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;


//String concatenation  Operator/
//The concatenation operator (+) concatenates two string values together
//returning another string that is the union ot the two operand together


console.log("Hello World");
console.log("hello " + "World");
 
var myname = "vinod";
console.log(myname + " thapa");
console.log( myname + "gupta");
// Challenge
//output of 3**3
console.log(3**3);
console.log(2**4); //2*2*2*2
console.log(10  ** -1); 
// what will bw thw output ,when we add a no. and a string 
console.log( 4 + "thapa")
console.log( 10 - "gupta");


// a program to swap a no. using 3 variable
var a = 2;
var b = 3;
var c = b; //c=3
b = a
a = c
console.log("the value of is"+ a);
console.log("the value of is"+ b);

// swap 2 no. without using 3 var

var a = 5;
var b = 6;
a= a+b; //11
b = a - b ;//5
a = a - b ;//6
console.log("the value of a is " + a);
console.log("the value of b is " + b);

//Diffrence b/t == & ===
var num1 = 5;
var num2 = '5';
console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1 == num2);// == check only the value not datatype
console.log(num1 === num2);// === check value as well as datatype



























