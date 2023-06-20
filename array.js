// Array:
//when we use va, we can stored only on variable at a time
 var frnd1 = "ram";
 var frnd2 = "shyam";

 //when we feel like storing multiple values of multiple datatype in one variable then instead of var, we will use an array.
 //in js, we have an array class, and arrays are the prototypw of this class.
 
//example

// var myfriends = ["ram","shyam","sita","true",45];
//1st element in array= lower index/ lower boundary[0]
//last element in array = upper index/ upper boundary[arary length-1]


var myfriends = new Array;// optional
var myfriends = ["ram","shyam","sita","true",45];


//Traversal in array
//navigate through an array
//if we want to get the single data at a time and also if we want to change the data

var myfriends = ["ram","shyam","sita","true" ,"nam"];
console.log(myfriends[4]);



//if we want to check the length of element of an array
console.log(myfriends[myfriends.length-1]) ;
console.log(myfriends.length)

//we use for loop to naviagte


var myfriends = ["ram","shyam","sita","true" ,"nam"];
for (var i=0; i<myfriends.length;i++){
    console.log(myfriends[[i]])
}


//after Eccemscript we have for..in and for..of loop too
var myfriends = ['ram','shyam','sara','ali','khan'];
for(let elements in myfriends){ //fr..in loop return index number in the loop
    console.log(elements)
}
for(let elements of myfriends){
    console.log(elements);
}

//Array.prototype.foreach()
//it calls a function for each element in the array
var myfriends = ['ram','shyam','sara','ali','khan'];
myfriends.forEach(function(element,index,array){
console.log(element + " index :" + index + " " + array);
})

//by nFat araow
myfriends.forEach((element,index,array) => {
  
console.log(element + " index :" + index + " " + array);
})