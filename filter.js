//Array.prototype.filter()
//Returns a new array containinng all elements of the calling 
//array for which  the provided filtering function returns true.
const prices = [200,300,350,400,450,500,600];
const newprice = prices.filter((elem, index) =>{
    // return elem > 1400; // it return empty array[]
    return elem > 400;
})
console.log(newprice);



//How to short an array
//Array.prototype.sort()

//the sort() method sorts the elements of an array in place and returns the sorted array . the default sort order is ascending ,
//buit upon converting the elements into strings.
//then comparing their sequences of UTF-16 code units values
const months = ['jan','feb','march','april','may'];
console.log(months.sort())


const array =[1,2,4,2000,77,34,88];
console.log(array.sort());


//however,if numbers are sorted as strings .
//"24" is boigger than "100" because "2 " is bigger than "1"
//because of this , the sort () method will produce an incorrect result when sorting numbers