var AA = new Number(5.345123456);
console.log(AA.toPrecision(3));    //5.35

var AB = new String("Have Nice Dream");
console.log(AB.length);    //15

//Method Number.isNaN()
var AC ;
AC = 7;
console.log(Number.isNaN(AC));    //false

var AD ;
AD = 8/'b';
console.log(Number.isNaN(AD));     //True

//Number.isFinite()
var AE;
AE = 3 ;
console.log(Number.isFinite(AE));    //true

var AF;
AF = 1/0;
console.log(Number.isFinite(AF));    //false

var AG;
AG = 'M';
console.log(Number.isFinite(AG));    //false

//Number.isInteger() dan Number.isSafeInteger()
var AH ;
AH = 5;
console.log(Number.isInteger(AH));    //true
console.log(Number.isSafeInteger(AH));    //true

var AI;
AI= 3.4567;
console.log(Number.isInteger(AI));    //false
console.log(Number.isSafeInteger(AI));    //false

//Number.parseFloat()
var AJ = "34567";
console.log(typeof(AJ));    //string

var AK = Number.parseFloat(AK);
console.log(AK);    //NaN
console.log(typeof AK);    //number

var AL = "-82837";
console.log(typeof AL);    //string

//Number.parseInt()
var AM = "1234";
console.log(AM);    //1234
console.log(typeof AM);    //string

AM = Number.parseInt(AM);
console.log(AM);    //1234
console.log(typeof AM);    //number

//Number.prototype.toExponential()
var AN = 7000.12345;
console.log(AN.toExponential());    //7.00012345e+3
console.log(AN.toExponential(1));    //7.0e+3
console.log(AN.toExponential(2));    //7.00e+3
console.log(AN.toExponential(3));    //7.000e+3

//Number.prototype.toFixed()
var AO = 812.98765;
console.log(AO.toFixed());    //813
console.log(AO.toFixed(1));    //813.0
console.log(AO.toFixed(2));    //812.99
console.log(AO.toFixed(3));    //812.988

//Number.prototype.toPrecision()
var AP = 3000.123456789;
console.log(AP.toPrecision());    //3000.123456789
console.log(AP.toPrecision(1));    //3e+3
console.log(AP.toPrecision(5));    //3000.1
console.log(AP.toPrecision(7));    //3000.123

//Number.prototype.toString()
var AQ = 350;
console.log(typeof AQ);    //number
AR = AQ.toString();
console.log(typeof AR);    //string
console.log(AR);    //350

var AS = new Number(AQ);
console.log(typeof AS);    //object

//Number.prototype.toLocaleString()
var AT = 1234600.987;
console.log(AT.toString());    //1234600.987
console.log(AT.toLocaleString());    //1,234,600.987

//Number.prototype.valueOf()
var AU = new Number(99);
console.log(typeof AU);    //object

AV = AU.valueOf();
console.log(typeof AV);    //number
console.log(AV);    //99
















