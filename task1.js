x=5;
var x;
console.log(x);

x=5;
let x;
console.log(x);
// Refrence Error

x=7;
const x;
console.log(x);
// Syntax  Error

function  fun(){
    a=10;
    let b=50;
}
fun();
console.log(a)     //10
console.log(b)     //Refrence Error


function  fun1(){
    console.log(name)
    var name =  "Mamatha";
}
fun1();
// Undefined


function  fun2(){
    var name = "Mamatha";
    console.log(name);
}
fun2();
