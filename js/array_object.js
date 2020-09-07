var aaa = new Array("a", "b", "c", "d", "e");
var aba = ["a", "b", "c", "d"];
var aca = "aiueo";
var ada = 123456;
var aea = true;

console.log(Array.isArray(aaa));     //true
console.log(Array.isArray(aba));     //true
console.log(Array.isArray(aca));     //false
console.log(Array.isArray(ada));     //false
console.log(Array.isArray(aea));     //false
console.log(Array.isArray([1, 2, 3]));     //true

//Property Array.prototype.length
console.log ( aaa.length );     //5
console.log(aba.length);      //4

console.log(aaa);     //(5) ["a", "b", "c", "d", "e"]
aaa.length = 3;
console.log(aaa.length);    //3
console.log(aaa);     //(5) ["a", "b", "c"]


aaa.length = 7;
console.log(aaa.length);     //7
console.log(aaa);     //(7) ["a", "b", "c", empty × 4]


//Array Instance Property
var afa = ["Apple", "Banana", "Cerry", "Pineapple", "Orange"];
for (var i =0; i < afa.length; i++){
    console.log(afa[i]);  //"Apple", "Banana", "Cerry", "Pineapple", "Orange"
}

//Method Array.prototype.reverse()
console.log(afa);     //(5) ["Apple", "Banana", "Cerry", "Pineapple", "Orange"]
var aga = afa.reverse();
console.log(aga);     //(5) ["Orange", "Pineapple", "Cerry", "Banana", "Apple"]
console.log(aga.reverse());     //(5) ["Apple", "Banana", "Cerry", "Pineapple", "Orange"]

//Method Array.prototype.concat()
var aha = ["a", "b", "c", "d", "e", "f", "g"];
var aia = [1, 2, 3, 4];

var aja = aha.concat(aia);
console.log(aja);      //(11) ["a", "b", "c", "d", "e", "f", "g", 1, 2, 3, 4]

var aka = aia.concat(aha);
console.log(aka)       //(11) [1, 2, 3, 4, "a", "b", "c", "d", "e", "f", "g"]

//Method Array.prototype.slice()
console.log(aha.slice());     //(7) ["a", "b", "c", "d", "e", "f", "g"]
console.log(aha.slice(4));     //(3) ["e", "f", "g"]
console.log(aha.slice(4, 6));     //(2) ["e", "f"]
console.log(aha.slice(-4, 6))     //(3) ["d", "e", "f"]
console.log(aha.slice(8));     //[]
console.log(aha.slice(4, 8));     //(3) ["e", "f", "g"]
console.log(aha.slice(-5));     //(5) ["c", "d", "e", "f", "g"]
console.log(aha.slice(-9));     //(7) ["a", "b", "c", "d", "e", "f", "g"]
console.log(aha.slice(4, -6));     //[]

//Method Array.prototype.splice()
console.log(aha);    //["a", "b", "c", "d", "e", "f", "g"]
aha.splice(4);      //(4) ["a", "b", "c", "d"]
console.log(aha);

var aia = ["a", "b", "c", "d", "e", "f", "g"];

aia.splice(4,2);
console.log(aia);    //(5) ["a", "b", "c", "d", "g"]

var aja =  ["a", "b", "c", "d", "e", "f", "g"];
aja.splice(4, 2, "x", "y", "z");
console.log(aja);        //(8) ["a", "b", "c", "d", "x", "y", "z", "g"]

aja.splice(4, 0 , "1");
console.log(aja);        //(9) ["a", "b", "c", "d", "1", "x", "y", "z", "g"]

var aka = ["a", "b", "c", "d", "e", "f", "g"];
console.log(aka.join());         //a,b,c,d,e,f,g
console.log(aka.join("-"));      //a-b-c-d-e-f-g
console.log(aka.join(" # "));    //a # b # c # d # e # f # g

//Method Array.prototype.push() Array.prototype.pop()






























