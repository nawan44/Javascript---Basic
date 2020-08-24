//Math Object Property
console.log("Math.E = " + Math.E);    //2.718281828459045
console.log("Math.LN10 = " + Math.LN10);   //2.302585092994046
console.log("Math.LN2 = " + Math.LN2);    //0.6931471805599453
console.log("Math.LOG10E = " + Math.LOG10E);   //0.4342944819032518
console.log("Math.LOG2E = " + Math.LOG2E);    //1.4426950408889634
console.log("Math.PI = " + Math.PI);    //3.141592653589793
console.log("Math.SQRT1_2 = " + Math.SQRT1_2);   //0.7071067811865476
console.log("Math.SQRT2 = " + Math.SQRT2);   //1.4142135623730951

var radius = 7;
var CircleArea = Math.PI * radius * radius;
console.log(CircleArea.toFixed(2));

//Math.ceil,Math.floor(x), Math.round(x)  Method

var AAA = 12.5;
console.log(Math.floor(AAA));   //12
console.log(Math.ceil(AAA));   //13
console.log(Math.round(AAA));   //13

var ABA = 12.4;
console.log(Math.floor(ABA));   //12
console.log(Math.ceil(ABA));   //13
console.log(Math.round(ABA));  //12

var ACA = 12.6;
console.log(Math.floor(ACA));   //12
console.log(Math.ceil(ACA));    //13
console.log(Math.round(ACA));   //13

var ADA = 12.1354;
console.log(Math.floor(ADA));   //12
console.log(Math.ceil(ADA));    //13
console.log(Math.round(ADA));   //12


//Method Math.random()
var AEA = Math.random();
console.log(AEA);   

AEA = Math.round(AEA*10);
console.log(AEA);   

//Method Math.max() dan Math.min()
var AFA = Math.max(1, 2, 3, 4, 9, 8, 7, 6);
console.log(AFA);   //9

var AGA = Math.min(6, 7, 4, 5, 1, 3, 2);
console.log(AGA);   //1


//Method Math.abs()
var AHA = 7 ;
console.log(Math.abs(AHA));   //7

var AIA = -7 ;
console.log(Math.abs(AIA));   //7

//Method Math.pow()
console.log(Math.pow(2,5));   //32
console.log(Math.pow(49,1/2));  //7

//Method Math.sqrt()
console.log(Math.sqrt(25));   //5
console.log(Math.sqrt(-3));   //NaN

//Method Math.log(), Math.log10() dan Math.log2()
console.log( Math.log(1) );  //0
console.log(Math.log(10));   //2.302585092994046

//Method Math.sin(), Math.cos() dan Math.tan()
var degree = 30;
var rad = degree * ((2*Math.PI)/360);

console.log(Math.sin(rad));   //0.49999999999999994
console.log(Math.cos(rad));   //0.8660254037844387
console.log(Math.tan(rad));   //0.5773502691896257



