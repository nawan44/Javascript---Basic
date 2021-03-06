var foo;

// operator matematika

foo = +100;
console.log(foo);   //100

foo = -25;
console.log(foo);   //-25

foo = 50 + 100;
console.log(foo);   //150

foo = 8.9 + 0.500;
console.log(foo);   //9.4

foo = 9 * 8;
console.log(foo);   //72

foo = 100 / 4;
console.log(foo);   //25

foo = 20 % 7;
console.log(foo);   //6

// increament & decremenat

foo = 9;
console.log(++foo);   //10
console.log(foo);     //10

foo = 9;
console.log(foo++);   //9
console.log(foo);    //10

foo = 9;
console.log(--foo);   //8
console.log(foo);     //8

foo = 9;
console.log(foo--);   //9
console.log(foo);     //8

//Perbandingan

foo = 3 < 12;
console.log(foo);      //true

foo = 4 < 4;
console.log(foo);   //false

foo = 4 <= 4;
console.log(foo);   //true

foo = 9 != 13;
console.log(foo);   //true

foo = 14 == 12;
console.log(foo);   //false

foo = 14 === 14;
console.log(foo);   //true

foo = 14 == '14';
console.log(foo);   //true

foo = 14 === '14';
console.log(foo);   //false

foo = 0.4 === 4e-1;
console.log(foo);   //true

foo = 'b' < 'c';
console.log(foo);   //true

foo = 'b' < 'B';
console.log(foo);   //false

foo = 'revo' < 'revost';
console.log(foo);   //true

foo = false < true;
console.log(foo);   //true

foo = 'raai' == 13;
console.log(foo);   //false

foo = true == 1;
console.log(foo);   //true

foo = true === 1;
console.log(foo);   //false

foo = false == 0;
console.log(foo);   //true

foo = false === 0;
console.log(foo);   //false

//Falsy & truthy value

foo = '' == '0';   
console.log(foo);     //false

foo = 0 == '';
console.log(foo);     //true

foo = false == 'false';
console.log(foo);     //false

foo = false == '0';
console.log(foo);    //true

foo = false == undefined;
console.log(foo);   //false

foo = false == null;
console.log(foo);   //false

foo = null == undefined ;
console.log(foo);   //true

foo = ' \t\r\n' == 0;
console.log(foo);   //ture

//OPERATOR LOGIKA

foo = true && false;
console.log(foo);   //false

foo = true || false;
console.log(foo);   //true

foo = !false;
console.log(foo);   //true

foo = true || true && false;
console.log(foo);   //true

foo = false && true || true;
console.log(foo);   //true

//Konsep Short-Circuit Evaluation
foo = true ||  false || true;
console.log(foo);   //true

foo = false && true && true;
console.log(foo);    //false

var bar = false ;
var foo = bar && alert("Hi, Iam");

var aa = "Hi, Iam" || "And You";
console.log(aa);   //Hi, Iam

var aa = "Hi, Iam" && "And You";
console.log(aa);   //And You

var aa = true || "And You";
console.log(aa);   //true

var aa = false || "And You";
console.log(aa);   //And You

var aa = "Hi, Iam" && false;
console.log(aa);   //false

var aa = false && "And You";
console.log(aa);   //false           

var aa = false || false && true || "And You";
console.log(aa);   //And You

var aa = true || false && true || "And You";
console.log(aa);   //true

//String
var bb = "Failling Love";
console.log (bb);   //Failling Love

var cc = "Selamat ";
var dd = "Datang ";
var ee = "Di "
var ff = "Indonesia"
hasil = cc + dd + ee + ff;
console.log(hasil);    // Selamat Datang Di Indonesia


var gg, hh, ii;
var nama =["Andi", "Bella" , "Cindy", "Dane", "Elly"];

gg = nama[1] + " paling rajin"
console.log(gg); // Bella paling rajin

hh = nama[2] + ' dan ' +nama[3] + ' adalah teman';
console.log(hh);   // CIndy dan Dane adalah teman

ii = "Nilai "+ nama [3]  +" adalah "+ 40*2;
console.log(ii)   // Nilai Dane adalah80

//template string
var jj, kk;
var geng = ["Alex", "Buddy", "Cindy"];
jj = `${geng[0]} adalah pelajar SMP`;
console.log(jj);   //Alex adalah pelajar SMP

kk = `Mereka ${geng[0]} dan ${geng[1]} mendapat nilai ${2*45}`;
console.log(kk);   //Mereka Alex dan Buudy mednapat nilai 90

abc = 10 + 10 + 10;
console.log(abc); //30

abc = '10' + 10 + 4;
console.log(abc); //10104

abc = 10 + '10' + 4;
console.log(abc); //10104

abc = 10 + 10 + '4';
console.log(abc); //204

//BITWISE

var a = 0b10101010;
var b = 0b11011110;
console.log(a);   //170
console.log(b);   //222

foo = a & b;
console.log(foo);   //138

foo = a | b;
console.log(foo);   //254

foo = a ^ b;
console.log(foo);   //116

foo = ~a;
console.log(foo);   //-171

foo = a >> 2;
console.log(foo);   //42

foo = a << 3;
console.log(foo);   //1360


//Assignment
var a = 10;
var f = "Belajar";

b = a + 7;
c = a + b + 6;
d = a + b + c + 30;

e = f + " Javascript";
g = e + " ES Versi " + a;

console.log(a);   //10
console.log(b);   //17
console.log(c);   //33
console.log(d);   //90
console.log(g);   //Belajar Javascript ES versi 10

//Gabungan Assignment
var a = 4;
var b = "Belajar";
a += 10;
a += a + 5;
console.log(a);   //33

b += " Javascipt";
b += " youtube";
console.log(b); //Belajar Javascript dari youtube

a /= 4
console.log(a);  //8,25

a -= 7;
console.log(a);  //1,25


//SPREAD
var bil1 = ["a", "b", "c", "d"];
console.log(bil1);   // ["a", "b", "c", "d"]

var bil2 = [1, 2, 3, 4];
console.log(bil2);   //[1, 2, 3, 4]

var bil3 = [...bil1, "e", "f", "g"];
console.log(bil3);   // ["a", "b", "c", "d", "e", "f", "g"]

var bil4 = [0, ...bil2, 5, 6, 7];
console.log(bil4);   //[0, 1, 2, 3, 4, 5, 6, 7]

var bil5 = [...bil3, ...bil4]
console.log(bil5);   // ["a", "b", "c", "d", "e", "f", "g", 0, 1, 2, 3, 4, 5, 6, 7]
