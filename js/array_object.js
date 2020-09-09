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
var ala = ["a", "b", "c", "d", "e"];
console.log(ala);     //(5) ["a", "b", "c", "d", "e"]
ala.push("x");
console.log(ala);     //(6) ["a", "b", "c", "d", "e", "x"]

ala.push("y", "z");
console.log(ala);      //(8) ["a", "b", "c", "d", "e", "x", "y", "z"]

var ama = ["a", "b", "c", "d", "e", "f", "g"]
var study;

study = ama.pop();
console.log(study);      //g
console.log(ama);      //(6) ["a", "b", "c", "d", "e", "f"]

study = ama.pop();
console.log(study);      //f
console.log(ama);      //(5) ["a", "b", "c", "d", "e"]


//Method Array.prototype.unshift() and Array.prototype.shift()
var ana = ["a","b","c","d","e"];
ana.unshift("x");
console.log(ana);      //(6) ["x", "a", "b", "c", "d", "e"]

ana.unshift("y", "z");
console.log(ana);      //(8) ["y", "z", "x", "a", "b", "c", "d", "e"]

var aoa = ["a","b","c","d","e", "f"];
var study1;

study1 = aoa.shift();
console.log(study1);   //a
console.log(aoa);      //(5) ["b", "c", "d", "e", "f"]

study1=aoa.shift();
console.log(study1);   //b
console.log(aoa);      //(4) ["c", "d", "e", "f"]

//Method Array.prototype.toString() and Array.prototype.toLocaleString()
var apa = new Array("a", "b", "c", "d", "e", "f", "g", "h");
console.log(apa.toString());         //a,b,c,d,e,f,g,h
console.log(apa.toLocaleString());   //a,b,c,d,e,f,g,h

var aqa = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(aqa.toString);          //ƒ toString() { [native code] }
console.log(aqa.toLocaleString);    //ƒ toLocaleString() { [native code] }

//Method Array.prototype.includes()
var ara = ["a","b","c","d","e"];
console.log ( ara.includes("c") );    //true
console.log ( ara.includes("e") );    //true
console.log ( ara.includes("z") );    //false

//Method Array.prototype.indexOf()
var asa = ["a","b","c","d","e"];
console.log ( asa.indexOf("c") );    //2
console.log ( asa.indexOf("e") );    //4
console.log ( asa.indexOf("z") );    //-1
console.log ( asa.indexOf("1") );    //-1

//Method Array.prototype.forEach()
var ata = ["a", "b", "c", "d", "e"];
ata.forEach(
    function(){
        console.log("Javascript");    //Javascript
    }
)

var aua = ["a", "b", "c", "d", "e", "f", "g"];

aua.forEach(
    function(element, index){
        console.log("index " + index + " = " +element);     //index 0 = a
    }
)

var ava = ["a", "b", "c", "d", "e"];

ava.forEach(
    function(element1, index1, array){
        console.log("index " + index1 + " = " +element1);    
        console.log(array);     // 
    }
)

function show(element2, index2){
    console.log("Index "+index2+ " = " + element2);
}

var awa = ["a", "b", "c", "d"];
awa.forEach(show);

var aya = ["ada", "band", "kamu", "aku", "bisa"];
aya.forEach(show);

//Method Array.prototype.map()
var aza = [1, 5, 1, 3, 4, 7];
var baa = aza .map(
    function (element3, index3, array3){
        return element3 * 2;
    }
);
console.log(baa);     //(6) [2, 10, 2, 6, 8, 14]

function nextelement (element4) {
    return element4 * 2;
}
var caa = [1,5,0,9,1,9];
var daa = caa.map(nextelement);
console.log(daa);     // [2, 10, 0, 18, 2, 18]

function even(element5){
    if(element5 % 2 === 0){
        return element5;
    }
    else{
        return 0;
    }
}
var eaa = [6, 7, 9, 8, 1, 2];
var faa = eaa.map(even);
console.log(faa);     //[6, 0, 0, 8, 0, 2]

function multiplication3 (element6){
    return element6 * 3;
}

var gaa = [1, 2,3,4,5];
var haa = gaa.map(multiplication3);
console.log(haa);     //(5) [3, 6, 9, 12, 15]

function multiplication5(element7){
    return element7 * 5;
}

var iaa = [1, 2,3,4,5];
var jaa = iaa.map(multiplication5);
console.log(jaa);      //(5) [5, 10, 15, 20, 25]

function multiplication10 (element8){
    return element8 * 10;
}

var kaa = [1,2,3,4,5];
var laa = kaa.map(multiplication10);
console.log(laa);      //(5) [10, 20, 30, 40, 50]

//Method Array.prototype.filter()
function complete(element9){
    if (element9 % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

var maa = [8,4,7,9,3,2];
var naa = maa.filter(complete);
console.log(naa);     //(3) [8, 4, 2]

function big30(element10){
    if(element10 >= 30) {
        return true;
    }
    else{
        return false;
    }
}

var oaa = [23,60,44,12,34];
var paa = oaa.filter(big30);
console.log(paa);     //(3) [60, 44, 34]

//Method Array.prototype.every()
function even1(element11){
    if(element11 % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
var qaa = [6,8,10,12,16];
console.log(qaa.every(even1));     //true

var raa = [3,8,10,12,16];
console.log(raa.every(even1));     //false

function big10(element12){
    return element12 >= 10;
}
var saa = [23,60,44,12,34];
console.log(saa.every(big10));     //true
var taa = [2,60,44,12,34];
console.log(taa.every(big10));     //false

//Method Array.prototype.some()
function even2(element13){
    return (element13 % 2 === 0);
}
var uaa = [6,8,10,12,16];
console.log(uaa.some(even2));     //true
var vaa = [3,5,7,9,11,12];
console.log(vaa.some(even2));     //true
var waa = [3,7,9,99,41];
console.log(waa.some(even2));     //false

//Method Array.prototype.find() and Array.prototype.findIndex()
function even3(element14){
    return(element14 % 2 === 0);
}
var xaa = [5,7,14,12,16];
console.log(xaa.find(even3));        //14
console.log(xaa.findIndex(even3));   //2

function big20(element15){
    return element15 >= 20;
}
var yaa = [25,17,24,22,26];
console.log(yaa.find(big20));        //25
console.log(yaa.findIndex(big20));   //0

var zaa = [9,3,4,5,6];
console.log(zaa.find(big20));        //undefined
console.log(zaa.findIndex(big20));   //-1

var aab = [9,75,17,29,88];
console.log(aab.find(big20));         //75
console.log(aab.findIndex(big20));    //1

//Method Array.prototype.reduce() and Array.prototype.reduceRight()
function increase(total, number) {
    return total + number;
}
var aac = [1, 2, 3, 4, 5];
console.log(aac.reduce(increase));        //15
console.log(aac.reduce(increase, 10));    //25

console.log(aac.reduceRight(increase));       //15
console.log(aac.reduceRight(increase,10));    //25


function rank(total1, number1){
    return total1 + Math.pow(number1, 2);
}
var aad = [5, 7, 14];
console.log(aad.reduce(rank));        //250
console.log(aad.reduce(rank, 0));     //270

console.log(aad.reduceRight(rank));      //88
console.log(aad.reduceRight(rank, 0));   //270

//Mehtod Array.prototype.sort()
var aae = ["Iam", "You", "Love", "Me"]
aae.sort();
console.log(aae);     //(4) ["Iam", "Love", "Me", "You"]

var aaf = [3,5,2,8,1,31,22,44,33,11];
aaf.sort();
console.log(aaf);     //(10) [1, 11, 2, 22, 3, 31, 33, 44, 5, 8]

function compare(a1, b1){
    if (a1 < b1){
        return -1;
    }
    if(a1 > b1) {
        return 1;
    }
    return 0;
}

var aag = [3,5,2,8,1,31,22,44,33,11];
aag.sort(compare);
console.log(aag);    //(10) [1, 2, 3, 5, 8, 11, 22, 31, 33, 44]

function compare2(a2, b2){
    return a2 - b2;
}
var aah=[3,5,2,8,1,31,22,44,33,11];
aah.sort(compare2);
console.log(aah);     //(10) [1, 2, 3, 5, 8, 11, 22, 31, 33, 44]
