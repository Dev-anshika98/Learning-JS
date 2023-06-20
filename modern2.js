//template literals (template strings)
//program for table of 8
//output :  8*1 =8
//          8*2 =16
//          8*3 =24
for(let num =1; num <=10; num++){
    let tableof =8;
    //console.log(tableof + "*" + num +"=" + tableof *num)
    console.log(`${tableof} * ${num} = ${tableof * num}`)
}


// Default arguments
//default function parameters allow named parameters to be intialized with default values if no value or unfined is passes


function mult(a,b =5){ //we we give one value while default then first give the value of last
return a*b
}
console.log(mult(4)) //if one argument pass not two we get NaN


// Fat Arrow Function
//noraml way of writing function
console.log(sum());
function sum(){
    let a =5; b=6;
    let sum = a+b;
    return `the sum of two no. is ${sum} `;
}

// how to convert in into fat arrow function
//first intialize or define the function then call the function in fat arrow function
// fat arrow is used

const sum = () => {
    let a =5; b=6;
    let sum = a+b;
    return `the sum of two no. is ${sum} `;
}

console.log(sum());


const product = () => {
    let a =5; b=6;
    // let sum = a+b;
    return `the sum of two no. is ${a*b} `;
}

console.log(product());


const sub = () => {
    // let a =5; b=6;
    // let sum = a+b;
    return `the sum of two no. is ${(a=7)-(b=5)} `;
}

console.log(sub());

const multi = () => `the sum of two no. is ${(a=7)*(b=5)} `;


console.log(multi());