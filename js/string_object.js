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

// const a = { x: 1, y: 2 }; 
// const b = { x: 100, y: 200 }; 
// const c = { ...a, ...b }; 
// console.log(y);

const x = 10; 
const y = 'Telkom Indonesia'; 
const z = x > 5 && y; 

console.log(z)

{/* <div variant=”large”></div> */}


// const [a, b] = [0, 1, 2, 3]; 
// console.log(b)

// function bar(){ 
//     Const foo = []; return foo; } 
// alert(typeof bar());

// var x = 3; var foo = { x: 2, baz:{ x:1, bar:function(){ return x; } } }

// var go = foo.baz.bar;

// alert(go());

const a = { x: 1, y: 2 }; const b = 'y'; const c = a[b]; console.log(c); 

//Method String.prototype.substr()
var AIA = "Barcelona Football Club";
console.log(AIA);   //Barcelona Football Club
console.log(AIA.substr(1));    //arcelona Football Club
console.log(AIA.substr(-2));   //ub
console.log(AIA.substr(-3));   //lub
console.log(AIA.substr(4));    //elona Football Club
console.log(AIA.substr(3, 4));   //celo
console.log(AIA.substr(-3, 4));   //lub


//Method String.prototype.substring()
console.log(AIA.substring(1));    //arcelona Football Club
console.log(AIA.substring(-2));   //Barcelona Football Club
console.log(AIA.substring(-3));   //Barcelona Football Club
console.log(AIA.substring(4));    //elona Football Club
console.log(AIA.substring(3, 4));  //c
console.log(AIA.substring(-3, 4));   //Barc


//Method String.prototype.slice()
console.log(AIA.slice(1));    //arcelona Football Club
console.log(AIA.slice(0, -22));    //B
console.log(AIA.slice(-2));    //ub
console.log(AIA.slice(-3));     //lub
console.log(AIA.slice(3));      //celona Football Club
console.log(AIA.slice(3,4));     //c
console.log(AIA.slice(3, -4));   //celona Football 

//Method String.prototype.split()
console.log(AIA.split());   //["Barcelona Football Club"]
console.log(AIA.split(''));  //["B", "a", "r", "c", "e", "l", "o", "n", "a", " ", "F", "o", "o", "t", "b", "a", "l", "l", " ", "C", "l", "u", "b"]
console.log(AIA.split('o'));   //["Barcel", "na F", "", "tball Club"]
console.log(AIA.split('a'));   //["B", "rcelon", " Footb", "ll Club"]

var AJA = "one two three four five six ";
console.log(AJA.split(' ', 4));   //["one", "two", "three", "four"]

var AKA = "one,two;three,four-five+six";
console.log(AKA.split(/\W/))   //["one", "two", "three", "four", "five", "six"]

//Method String.prototype.trim()

var ALA = "    Liverpool Football Club    ";
console.log(ALA.length);   //31
console.log(ALA);   //    Liverpool Football Club    

ALA = ALA.trim();
console.log(ALA.length);  //23
console.log(ALA);   //Liverpool Football Club


var username = "admin ";
if(username === "admin") {
    console.log("Welcome admin...")
}
else{
    console.log("User Not Found");
}
//User Not Found


//Method String.prototype.concat()
var AMA = "Manchester";
var ANA = AMA.concat(" United");
console.log(ANA);   //Manchester United

console.log(ANA.concat(" Old Traffod"));   //Manchester United Old Traffod

//Method String.prototype.includes()

var AOA = "Real Madrid Santiago Bernebau";
console.log(AOA.includes('Madrid'));     //true
console.log(AOA.includes('madrid'));     //false
console.log(AOA.includes('Real', 1));    //false
console.log(AOA.includes('eal', 1));     //true
console.log(AOA.includes('Real', 0));    //true
console.log(AOA.includes('al', 2));     //true

//Method String.prototype.startsWith() String.prototype.endsWith()

console.log(AOA);                        //Real Madrid Santiago Bernebau
console.log(AOA.startsWith('Real'));     //true
console.log(AOA.startsWith('Madrid'));   //false
console.log(AOA.startsWith('real'));     //false
console.log(AOA.startsWith('madrid'));   //false

console.log(AOA.endsWith('Bernebau'));     //true
console.log(AOA.endsWith('bernebau'));     //false

console.log(AOA.startsWith('Madrid', 5));   //true
console.log(AOA.endsWith('Madrid', 11));    //true
console.log(AOA.endsWith('Madrid', 10));    //false

//Method String.prototype.repeat()

// console.log(AOA.repeat(-1));
console.log(AOA.repeat(0));    //
console.log(AOA.repeat(1));    //Real Madrid Santiago Bernebau
console.log(AOA.repeat(5));     //Real Madrid Santiago BernebauReal Madrid Santiago BernebauReal Madrid Santiago BernebauReal Madrid Santiago BernebauReal Madrid Santiago Bernebau
console.log('Stadium'.repeat(7));    //StadiumStadiumStadiumStadiumStadiumStadiumStadium


//Method String.prototype.toString() String.prototype.valueOf()
var APA = new String ("West Java");
console.log(APA);           //String {"West Java"}
console.log(typeof APA);    //object

AQA = APA.toString();
console.log(typeof AQA);    //string
console.log(AQA);           //West Java

var ARA = APA.valueOf();    
console.log(typeof ARA);    //string
console.log(ARA);           //West Java

//Method String.prototype.indexOf()
console.log(AOA);                //Real Madrid Santiago Bernebau
console.log(AOA.indexOf('Madrid'));       //5
console.log(AOA.indexOf('madrid'));       //-1 {not found}
console.log(AOA.indexOf('Santiago'));     //12

var count = 0;
var position = AOA.indexOf('a');

while(position !==-1){
    count++;
    position = AOA.indexOf('a', position +1);
}
console.log(count);    //5

//Method String.prototype.lastIndexOf()
console.log(AOA);       //Real Madrid Santiago Bernebau
console.log(AOA.lastIndexOf('Real'));     //0
console.log(AOA.lastIndexOf('Madrid'));     //5
console.log(AOA.lastIndexOf('madrid'));     //-1 {not found}
console.log(AOA.lastIndexOf('Santiago'));     //12
console.log(AOA.lastIndexOf('Bernebau'));     //21

console.log(AOA.lastIndexOf('Madrid', 5));   //5
console.log(AOA.lastIndexOf('Madrid', 3));   //-1

var count1 = 0;
var position1 = AOA.lastIndexOf('e');

while(position1 !==-1){
    count1++;
    position1 = AOA.lastIndexOf('e', position1 -1);
}

console.log(count1);   //3

//Method String.prototype.search()
console.log(AOA.search('Madrid'));   //5
console.log(AOA.search('madrid'));   //-1
console.log(AOA.search(/madrid/i));   //5
console.log(AOA.search('Santiago'));   //12

//String.prototype.match()
console.log(AOA.match('Madrid'));     //Array(1)
console.log(AOA.match('madrid'));     //null
console.log(AOA.match('a'));     //Array(1)
console.log(AOA.match(/madrid/));     //null
console.log(AOA.match(/madrid/i));     //Array(1)
console.log(AOA.match('Bar'));     //null

var ASA = "1 = 60 minute = 3600 secomf";
console.log ( ASA.match(/\d+/g));  //["1", "60", "3600"]

//Method String.prototype.replace()
console.log(AOA);   //Real Madrid Santiago Bernebau
console.log(AOA.replace("Santiago Bernebau", "Camp Nou"));   //Real Madrid Camp Nou
console.log ( AOA.replace(/a/g,"Q") );    //ReQl MQdrid SQntiQgo BernebQu








