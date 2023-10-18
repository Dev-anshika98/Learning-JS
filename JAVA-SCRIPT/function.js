//function with return value
function sum1(a,b){
    document.write(a+b)
}
sum(20,30);

//function with return
function name(fname="anshika", lname="gupta"){
    var a = fname + " " + lname;
    return a;
}
var fn =  name("Ram","singh");
document.write(fn);

function sum(a,b,c){
    var s = a+b+c;
    return s;
}
function per(tt){
    var per = tt/300*100 ;
   document.write(per);
}

var total = sum(40,50,30);
per(total);