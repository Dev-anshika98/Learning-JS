// console.log('')
// console.log('Hello World');


// ***Values and Variables in Javascript

// var MyName = 'Anshika Gupta' ;
// var $1my__Age = "18"
// console.log($1my__Age);


//Datatype in Javascript
 var MyName = "Anshika Gupta";
 console.log(MyName);
var myAge = 26
console.log(myAge);
// var iam_anshikas = false;
// console.log(iam_anshikas);
var iam_anshika = true;
console.log(iam_anshika);

//type of operator
console.log(typeof(MyName));
console.log(typeof(myAge));
// console.log(typeof(iam_anshikas));
console.log(typeof(iam_anshika));
//Some Problems
console.log( 10 + "50");//cancot 1050 
console.log( 5 - "5"); //bug it gives subs 0
console.log( "Java" + "Script");//concate JavaScript
console.log( "Java " + "Script");//concate Java Script
console.log( " " + " ");// nothing come
console.log( " " + "0");//0
console.log( "Anshika" -"gupta");// not a number NAN
console.log(true + true); //1+1=2
console.log(true + false); //1+0=1
console.log(false + true);//0+1=1
console.log(false - true);//0-1=-1

//Difference Between null VS undefined?
var iAmUseless = null;
console.log( iAmUseless);
console.log(typeof(iAmUseless));//bug- datatype=object


var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));// datatype=undefined

//What is NAN
// var myphonenumber = 9238339474;
// var myname = "Disha";
// console.log(isNaN(myphonenumber));
// console.log(isNaN(myname));

// if(isNaN(myname)){
//     console.log("pls enter valid no.");
// }
//NaN
NaN===NaN;
Number.NaN === NaN;
isNaN(NaN);
isNaN(Number.NaN);
Number.isNaN(NaN);

console.log(NaN===NaN);
console.log(Number.NaN===NaN);
console.log(Number.isNaN(NaN));
console.log(20+2);

