var aaa = "Learn Javascript";
console.log(aaa);    //Learn Javascript

window.baa = "Learn HTML";
console.log(baa);    //Learn HTML

function great(a){
    return "Hello " + a;
}
var caa = window.great("Bekasi ");
console.log(caa);   //Hello Bekasi 

function learn(b){
    return "Learn " + b;
}
var daa = window.learn("CSS");
console.log(daa);     //Learn CSS

function good(c){
    return "Good " + c ;
}
var eaa = window.good("Morning");
console.log(eaa);     //Good Morning

console.log(window.Math.PI);    //3.141592653589793
console.log(window.Number.parseInt("10101101",2));   //173



