// Searching and filter in array
//Array.prototype.indexOf()
//returns the first (least) index of an element within the array equal to an element, or -1 if none is found.
//it search the element from the 0th index no.

// var myfriends = ['ram','shyam','reeta','run', 'vinod','run'];

// console.log(myfriends.indexOf("ram"));




//Array.prototype.lastIndexOf()
//returns the last (greatest) index of an element within the array equal to an element, or -1 if none
//is found . it search the element last to first 


// var myfriends = ['ram','shyam','run', 'vinod',"shyam",'reena',"shyam"];

// console.log(myfriends.indexOf("run",3 ));
// console.log(myfriends.lastIndexOf("shyam", 6));



//Array.prototype.includes()
//Determine whether the array containes a vlaue, returning true or false as appropriate.


// var myfriends = ['ram','shyam','run', 'vinod',"shyam",'reena',"shyam"];

// console.log(myfriends.includes("run", 3));

//Array.prototype.find()
//arr.find(callback(element[,index[,array]])[, thisArg])
//returns the found element in the array ,if some element in the array satisfies the testing function ,or undefined
//if not found only problem is that it return only one element

const prices = [200,300,400,500,600,650,700];
// //price<400

console.log( prices.find((currval) =>currval >400)); //500

console.log( prices.find((currval) =>currval >1400)); //undefined



//Array.prototype.findIndex()
//returns the found index in the array ,
// if an element in the array satisfies the testing function ,or -1 if not found.
console.log( prices.findIndex((currval) =>currval >1400)); //-1 if not present in array


