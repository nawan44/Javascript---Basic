//simple RegExp

var aaa = /ab+c/;
console.log(aaa);     ///ab+c/
console.log( typeof aaa);     //object

var aba = new RegExp("ab+c");
console.log(aba);     ///ab+c/
console.log(typeof aba);     //object

//Method RegExp.prototype.test()

var aca = "Atletico Madrid Wanda Stadium";
var ada = /Madrid/;

console.log(ada.test(aca));     //true
console.log(/Wanda/.test(aca));     //true
console.log(/wanda/.test(aca));     //false

//Method RegExp.prototype.exec()
var aea = "1 hour = 60 minute = 3600 second";
var afa = /\d+/;
var aga = /\d+/g;

console.log(afa.exec(aea));   //Array [ "1" ]
console.log(aga.exec(aea));   //["1", index: 0, input: "1 hour = 60 minute = 3600 second", groups: undefined]
console.log(aga.exec(aea));   //["60", index: 9, input: "1 hour = 60 minute = 3600 second", groups: undefined]
console.log(aga.exec(aea));   //["3600", index: 21, input: "1 hour = 60 minute = 3600 second", groups: undefined]

var result1 = aga.exec(aea);
// console.log(result1.index);     //
// console.log(result1[0]);     //

var result2 = aga.exec(aea);
console.log(result2.index);     //0
console.log(result2[0]);      //1

var result3 = aga.exec(aea);
console.log(result3.index);     //9
console.log(aga[0]);     //undefined
console.log(aea.match(/\d+/g));    //(3) ["1", "60", "3600"]

var aha = "Your NeVer Walk Alone";
console.log(/NeVer/.test(aha));     //true
console.log(/Never/.test(aha));     //false
console.log(/never/.test(aha));     //false
console.log(/eVer/.test(aha));     //true

console.log(/NeVer/i.test(aha));     //true
console.log(/Never/i.test(aha));     //true
console.log(/never/i.test(aha));     //true
console.log(/eVer/i.test(aha));     //true

console.log(aha);
console.log(/^You/.test(aha));     //true
console.log(/You$/.test(aha));     //false
console.log(/^Alone/.test(aha));     //false
console.log(/Alone$/.test(aha));     //true
console.log(/^NeVer/.test(aha));     //false
console.log(/NeVer$/.test(aha));     //false
console.log(/^you/.test(aha));     //false
console.log(/^you/i.test(aha));     //true

var aia = /.b../;
console.log(aia);          ///.b../
console.log(aia.test("abaa"));     //true
console.log(aia.test("aba"));     //false
console.log(aia.test("abbaa"));     //true
console.log(aia.test("bab"));     //false
console.log(aia.test("1b111"));     //true
console.log(aia.test(" b  "));     //true

var aja = /^.b..$/;
console.log(aja);          ///^.b..$/
console.log(aja.test("abaa"));     //true
console.log(aja.test("aba"));     //false
console.log(aja.test("abbaa"));     //false {must 2 char after b}
console.log(aja.test("bab"));     //false
console.log(aja.test("1ab11"));     //false {must 2 char before b}
console.log(aja.test(" b  "));     //true

var aka = /[abcde]../;
console.log(aka);          ///[abcde]../
console.log(aka.test("abaa"));     //true
console.log(aka.test("fba"));     //false
console.log(aka.test("1dd"));     //false 
console.log(aka.test("add"));     //true
console.log(aka.test(" dd"));     //false 
console.log(aka.test("belajar"));     //true

var ala = /^[a-e][1-9][R-Z]./;
console.log(ala);          ///^[a-e][1-9][R-Z]./
console.log(ala.test("a9R"));     //false
console.log(ala.test("a9Ra"));     //true
console.log(ala.test("fa9Ra"));     //false 
console.log(ala.test("e9ZA"));     //true
console.log(ala.test("e9ZAAAAA"));     //true 

var ama = /[^a-e].../;
console.log(ama);          //[^a-e]...
console.log(ama.test("abaa"));     //false
console.log(ama.test("fba"));     //false
console.log(ama.test("1dd"));     //false 
console.log(ama.test("ddd"));     //false
console.log(ama.test(" dd"));     //false 
console.log(ama.test("madrid"));     //true 

var ana = /^[a-e].../;
console.log(ana);          //[^a-e]...
console.log(ana.test("abaa"));     //true
console.log(ana.test("fba"));     //false
console.log(ana.test("1dd"));     //false 
console.log(ana.test("ddd"));     //false
console.log(ana.test(" dd"));     //false 
console.log(ana.test("madrid"));     //false

var aoa = /A{2}1{3}/;
console.log(aoa);      ///A{2}1{3}/
console.log(aoa.test("AA111"));     //true
console.log(aoa.test("zzAAA111zz"));     //true
console.log(aoa.test("A11"));     //false
console.log(aoa.test("AA11"));     //false
console.log(aoa.test("A1111"));     //false

var aqa = /A{2}1{2,3}/;
console.log(aqa);      ///A{2}1{2,3}/
console.log(aqa.test("AA111"));     //true
console.log(aqa.test("zzAAA111zz"));     //true
console.log(aqa.test("A11"));     //false
console.log(aqa.test("AA11"));     //true
console.log(aqa.test("A1111"));     //false

var ara = /A{1,}1{3,}/;
console.log(ara);      ///A{1,}1{3,}/
console.log(ara.test("AA111"));     //true
console.log(ara.test("zzAAA111zz"));     //true
console.log(ara.test("A11"));     //false
console.log(ara.test("AA11"));     //false
console.log(ara.test("A1111"));     //true

var asa = /[A-Z]{2}[0-9]{1,4}[A-Z]{1,3}/;
console.log(asa);      ///[A-Z]{2}[0-9]{1,4}[A-Z]{1,3}/
console.log(asa.test("BM12345ARA"));     //false
console.log(asa.test("BM1234ARA"));     //true
console.log(asa.test("B99XYZ"));     //false
console.log(asa.test("BA99XYZ"));     //true
console.log(asa.test("Belajar BA99XYZ"));     //true

var ata = /^[A-Z0-9]{2,}z{2}_$/;
console.log(ata);      ///^[A-Z0-9]{2,}z{2}_$/
console.log(ata.test("A1zz_"));     //true
console.log(ata.test("AABBCCzz_"));     //true
console.log(ata.test("_AABBCCzz_"));     //false
console.log(ata.test("ZZ0101zz_"));     //true
console.log(ata.test("ZZ0101_zz_"));     //false
console.log(ata.test("100101zz_"));     //true

var aua = /ab*c/;
console.log(aua);      // /ab*c/
console.log(aua.test("abc"));     //true
console.log(aua.test("abbbbbc"));     //true
console.log(aua.test("ac"));     //true
console.log(aua.test("aaaab"));     //false

var aua = /ab+c/;
console.log(aua);      // /ab+c/
console.log(aua.test("abc"));     //true
console.log(aua.test("abbbbbc"));     //true
console.log(aua.test("ac"));     //false
console.log(aua.test("aaaab"));     //false

var ava = /ab?c/;
console.log(ava);      // /ab?c/
console.log(ava.test("abc"));     //true
console.log(ava.test("abbbbbc"));     //false
console.log(ava.test("ac"));     //true
console.log(ava.test("aaaab"));     //false

var awa = /\d\w\s/;
console.log(awa);      // /\d\w\s/
console.log(awa.test("1v "));     //true
console.log(awa.test("3Ba"));     //false
console.log(awa.test("9z  "));     //true
console.log(awa.test("1Z"));     //false

var axa = /www\.....\.com/;
console.log(axa);      // /www\.....\.com/   4 char
console.log(axa.test("www.google.com"));     //false
console.log(axa.test("www.abcd.com"));     //true
console.log(axa.test("www.xyz1.com"));     //true
console.log(axa.test("www.1234.com"));     //true

var aya = /www\.......\.com/;
console.log(aya);      // /www\.......\.com/   6 char
console.log(aya.test("www.google.com"));     //true
console.log(aya.test("www.abcd.com"));     //false
console.log(aya.test("www.xyz1.com"));     //false
console.log(aya.test("www.1234.com"));     //false

var aza = /.+@.+\..+/;
console.log(aza);      // /.+@.+\..+/
console.log(aza.test("aku@gmail.com"));     //true
console.log(aza.test("www.abcd.com"));     //false

var baa = /iam|stay|here/;
console.log(baa);      // /iam|stay|here/
console.log(baa.test("you here"));     //true
console.log(baa.test("you are here"));     //true
console.log(baa.test("your is here ?"));     //true

var caa = /^[A-Za-z]{1,2}\s*\d{1,4}\s*[A-Za-z]{1,3}$/
console.log(caa);      // /^[A-Za-z]{1,2}\s*\d{1,4}\s*[A-Za-z]{1,3}$/
console.log(caa.test("B 1 RI"));     //true
console.log(caa.test("B1RI"));     //true
console.log(caa.test("DA 9999 XYZ "));     //false
console.log(caa.test("DA 9999 XYZ"));     //true
console.log(caa.test("bk9he"));     //true
console.log(caa.test("zz  9YES"));     //true
console.log(caa.test("_zz9YES"));     //false



