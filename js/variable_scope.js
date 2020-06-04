var a = "Learn Javascript";
function foo(){
    console.log(a);
}
foo();    //Learn Javascipt


function abc(){
    var b = "Belajar Javascript";
}
abc();
console.log(abc);    // ReferenceError: a is not defined


var a1 = "Learn Web Development"
function foo1(){
    var a1 = "Learn Javascript";
    console.log(a1);    //Learn Javascript
}
foo1();
console.log(a1);      //Learn Web Development

function foo2(a,b){
    a = 21;
    b = 56;
    return ( a + b );
}

var a = 6;
var b = 12;
var c = foo2(a, b);

console.log(a);    //6
console.log(b);    //12
console.log(c);    //77
