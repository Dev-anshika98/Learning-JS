//Map and Reduce methods in array
//Array.prototype.map()


//let newArray = arr.map(callback(currentValue[,index[,array]]){
// return element for newArray, after executing something 
//}[, this Arg]);
//Returns a new array containing the results of calling a function on every element in this array
// const array1 = [1,4,9,16,25];
//  //num>9
// //  let newArray = array1.map(( currentValue,index,arr) =>{
// //     return currentValue > 9;
// //  })
// //  console.log(array1);
// //  console.log(newArray);

// let newArray = array1.map((currEle,index,arr)=>{
//     return `Index no = ${index} and the value is ${currEle} belong to ${arr}`
// })

// console.log(newArray);



// let newArrayfor = array1.forEach((currEle,index,arr)=>{
//     return `Index no = ${index} and the value is ${currEle} belong to ${arr}`
// }) 

// console.log(newArrayfor); //forEach() - it returns undifined

//it returns new array without mutating the original array


//*Difference - you can attach reduce(), sort(), filter(), and so on after performing map() method but not posssible 
//in forEcah method


//challenges
//1: Find the square root of each element in an array?
//2: Multiply each elemnt by 2 and return only those elements which are greater than 10?

// //sol1
// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((currEle) =>{
//     return Math.sqrt(currEle);
// })
// console.log(arrSqr);

//sol2
// let a = [2,3,4,6,8];
// let a1 = a.map((currentvalue) =>{
//     return currentvalue * 2;
// }).filter((currentvalue)=>{
//     return currentvalue > 10;
// })
// console.log(a1);

//Reduce method 
// Flatten an array means to convert the 3rd or 2nd array into a single dimension array

//The reduce() method executes a reducer function (that you provide) on each element of the array , resulting in 
// single output value 
// the reducer function takes four arguments :
// Accumulator 
// Current value
// Source Array
// current index


let arr =[5,6,2];
let sum = arr.reduce((Accumulator,currEle,index,arr)=>{
    return Accumulator += currEle;

})
console.log(sum);
