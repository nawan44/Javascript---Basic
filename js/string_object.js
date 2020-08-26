var AAA = new String("Learn Javascript");
console.log(AAA);   //Learn Javascript

console.log(typeof AAA);   //object
console.log(AAA.length);   //16
console.log(AAA.toUpperCase);   //LEARN JAVASCRIPT

var ABA = "Learn Javascript";
console.log(ABA);   //Learn Javascript
console.log(typeof ABA);   //string
console.log(ABA.length);   //16
console.log(ABA.toUpperCase);   //LEARN JAVASCRIPT

//Method String.fromCharCode() dan String.fromCodePoint()
console.log(String.fromCharCode(65));   //A
console.log(String.fromCharCode(65, 66 , 67));   //ABC

//Property String.prototype.length
var ACA = "Learn Javascript";
console.log(ACA.length);    //16

console.log("Web Development".length);   //15

//Method String.prototype.toLowerCase() dan String.prototype.toUpperCase()
var ADA = "Learn Web Development";
console.log(ADA.toLowerCase); //learn web development
console.log(ADA.toUpperCase); //LEARN WEB DEVELOPMENT
console.log(ADA);   //Learn Web Development

var AEA = "Learn"
console.log(AEA.toLocaleLowerCase);   //learn
console.log(AEA.toLocaleUpperCase);   //LEARN
console.log(AEA);   //Learn 

//Method String.prototype.charAt()
//The method calculation for the charAt () method starts at 0
var AFA = "Learn Javascript OOP"
console.log(AFA.charAt(1));   //e
console.log(AFA.charAt(6));   //J
console.log('Hello World'.charAt(6));   //W

console.log(AEA[1]);   //e
console.log(AEA[7]);   //J
console.log('Hello World'[6]);   //W

var AGA = "Learn Frontend";
AGA[0] = 'W';   //won't change the string
console.log(AGA);   //Learn Frontend

//Method String.prototype.charCodeAt() dan String.prototype.codePointAt()
var AHA = "Learn Javascript";

console.log(AHA.charCodeAt(1));   //101
console.log(AHA.charCodeAt(7));   //97
console.log('Learn'.charCodeAt(3));   //114










