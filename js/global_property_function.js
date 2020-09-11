var aaa = NaN;
console.log(aaa);     //NaN

var aab = Infinity;
console.log(aab);     //Infinity

var aac = undefined;
console.log(aac);     //undefined

var aad = null;
console.log(aad);     //null

//Function eavl()
var aae = "100 + 50";
console.log(aae);      //100+50

var aaf = eval(aae);
console.log(aaf);      //150

var aag = "var aah = 700 * 3";
eval(aag);
console.log(aah);     //2100

var aai = "alert ('Hello World')";
eval(aai);

var aaj;
aaj = 7;
console.log(isFinite(aaj));     //true

aak = 3.14567;
console.log(isFinite(aak));     //true

aal = 'a';
console.log(isFinite(aal));     //false

aam = 1/0;
console.log(isFinite(aam));     //false

aan = Number.NEGATIVE_INFINITY;
console.log(isFinite(aan));     //false

aao = NaN;
console.log(isFinite(aao));     //false

//Function isNaN()
var aap ;
aap = 8;
console.log(isNaN(aap));     //false

aaq = 7/'b';
console.log(isNaN(aaq));     //true

aar = NaN;
console.log(isNaN(aar));     //true

//Function ParseInt()
var aas = "1234.567";
console.log(parseInt(aas));      //1234
console.log(parseInt(99.99));   //99

console.log(parseInt("1100011", 2));   //99   
console.log(parseInt("143", 8));   //99
console.log(parseInt("63",16))   //99

//Function parsefloat()
var aat = "1234";
console.log( typeof aat);    //1234

aat = parseFloat(aat);
console.log(aat);    //
console.log(typeof aat);    //number

var aau = "-1234.567";
console.log(typeof aau);    //string
aau =parseFloat(aau);

console.log(aau);    //-1234.567
console.log(typeof aau);    //number

console.log(parseFloat("12.567 domino"));    //12.567
console.log(parseFloat("how much 253637"));    //NaN

//Function encodeURI() encodeURIComponent()
var aav = "https://www.detik.com/Learn #Javascipt";
var aaw = encodeURI(aav);
var aax = encodeURIComponent(aav);
console.log(aaw);   //https://www.detik.com/Learn%20#Javascipt
console.log(aax);   //https%3A%2F%2Fwww.detik.com%2FLearn%20%23Javascipt

//Function decodeURI() decodeURIComponent()
console.log(decodeURI(aaw));   //https://www.detik.com/Learn #Javascipt
console.log(decodeURIComponent(aaw));   //https://www.detik.com/Learn #Javascipt

console.log(decodeURI(aax));   //https%3A%2F%2Fwww.detik.com%2FLearn %23Javascipt
console.log(decodeURIComponent(aax));   //https://www.detik.com/Learn #Javascipt






