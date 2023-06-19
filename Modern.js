//Let v/s const v/s Var
//var = function scope {but value not in the block }
//let &const = block scope{ scope of the value is only within the block}


//const can't be change but var and let may be when we assign the value
var myName = "Anshika";
console.log(myName);
myName = "gupta";
console.log(myName);


// let myName = "Anshika";
// console.log(myName);
// myName = "gupta";
// console.log(myName);


const myName = "Anshika";
console.log(myName);
myName = "gupta";
console.log(myName);


function biodata(){
 const  myFirstName = "Anshika";
 console.log(myFirstName);

 if(true){
    const myLastName = "gupta"
    console.log('inner' + myLastName);
    console.log('inner' + myFirstName);
 }
 console.log('innerOuter' + myLastName);

}
// console.log(myFirstName);
biodata();