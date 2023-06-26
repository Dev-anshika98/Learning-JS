//CRUD in Array -create ,raed, update and delete

//Array.prototye.push()
//the push() method adds one or more elements to the end of an array and returns
//the new length of the array
// const animals = ['pigs', 'goats', 'sheep'];
// // const count = animals.push('chicken');

// // console.log(count);

// animals.push('chicken', 'cats','cow');
// console.log(animals);


// Array.prototype.unshift()
//the unshift() method adds one or more elements to the beginning of an array and returns the new length of the array

// const animals = ['pigs', 'goats', 'sheep'];
// // const count = animals.unshift('chicken');

// // console.log(count);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);


//2nd example
// const myNumber = [1,2,3,4,5];
// myNumber.unshift(9,8);
// console.log(myNumber);


//Array.prototype.pop()
//the pop() method removes the last element from an array and returns that element. this methodd changes the lenght of the array

// const plants = ['pea','potato','tomato','kale','cabbage'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);



//Array.prototype.shift()
//The shift() method removes the first element from an array and returns that removed element. this method 
//changes the length of the array.

// const plants = ['pea','potato','tomato','kale','cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);
 


//Challenge time
//Array.prototype.splice()
//Adds and/or removes elements from an array
// 1: Add Dec at the end of an array
// 2: What is the return value of splice method??
// 3: update march to March (updation)
// 4: Delete June from an array?



// const months = ['Jan','march', 'April','June','July'];
//sol1

// const newMonths = months.splice(months.length,0,"Dec"); //the index no. will be not present 
// // console.log(months);


// //sol2

// console.log(newMonths);// empty array []
// //sol3



// const months = ['Jan','march', 'April','June','July'];

// const indexOfMonth = months.indexOf('June');
// if(indexOfMonth != -1){

//     const updateMonth = months.splice(indexOfMonth,1,'june');
//     console.log(months);

// }
// else{
//     console.log('no such data found');
// }

//sol4
const months = ['Jan','march', 'April','June','July'];

const indexOfMonth = months.indexOf('April');
if(indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonth,2);

    // const updateMonth = months.splice(indexOfMonth,Infinity);

    console.log(months);
    console.log(updateMonth);

}
else{
    console.log('no such data found');
}

//infinity= Delete every items in array after the deletion of given items



















































































