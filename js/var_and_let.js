{
    var a = "Learn Javascript";
    console.log(a);      //Learn Javascript
}
console.log(a);          //Learn Javascript

{
    let b = "Learn Web Programming"
    console.log(b);      //Learn Web Programming
}
// console.log(b);          // ReferenceError: b is not defined


for (var i = 1; i <3; i++){
    console.log("Learn Javascript" + i);      //Learn Javascript1     Learn Javascript2
}
console.log(i);

for (let j = 1; j < 3; j++){
    console.log("Learn HTML" +j);     //Learn HTML1    Learn HTML2
}
// console.log(j);


var k = 10000;
for(var k = 1; k < 3; k++){
    console.log("Learn Javascript" +k);   //Learn Javascript1   Learn Javascript2
}
console.log("Price = " +k)       //Price = 3


var l = 10000;
for (let l = 1; l < 3; l++){
    console.log("Learn Javascript = " + l);   //Learn Javascript = 1   Learn Javascript = 2
}
console.log("Pice = " + l);     //Price = 10000
