var aaa = new Date();
console.log(aaa);         //Thu Sep 10 2020 18:35:52 GMT+0700 (Western Indonesia Time)
console.log(typeof aaa);  //object

var aab = new Date(2016,11,2,9,30,15,125);
console.log(aaa);         //Thu Sep 10 2020 18:35:52 GMT+0700 (Western Indonesia Time)

var aac;

aac = new Date(2017);
console.log(aac);      //Thu Jan 01 1970 07:00:02 GMT+0700 (Western Indonesia Time)

aac = new Date (2017, 11);
console.log(aac);     //Fri Dec 01 2017 00:00:00 GMT+0700 (Western Indonesia Time)

aac = new Date (2017, 11, 2);
console.log(aac);     //Sat Dec 02 2017 00:00:00 GMT+0700 (Western Indonesia Time)

aac = new Date(2017, 11, 2 ,9 );
console.log(aac);    //Sat Dec 02 2017 09:00:00 GMT+0700 (Western Indonesia Time)

aac = new Date(2017, 11, 2, 9, 30);
console.log(aac);    //Sat Dec 02 2017 09:30:00 GMT+0700 (Western Indonesia Time)

aac = new Date(2017, 11, 2, 9, 30, 15);
console.log(aac);     //Sat Dec 02 2017 09:30:15 GMT+0700 (Western Indonesia Time)

var aad;

aad = new Date("12/20/2020");
console.log(aad);       //Sun Dec 20 2020 00:00:00 GMT+0700 (Western Indonesia Time)

aad = new Date("12/20/2020 10:45");
console.log(aad);       //Sun Dec 20 2020 10:45:00 GMT+0700 (Western Indonesia Time)

aad = new Date("12 20 20 10:45:47");
console.log(aad);       //Sun Dec 20 2020 10:45:47 GMT+0700 (Western Indonesia Time)

aad = new Date("20 Dec 2020 10:45:47");
console.log(aad);       //Sun Dec 20 2020 10:45:47 GMT+0700 (Western Indonesia Time)

aad = new Date("2020-12-20");
console.log(aad);       //Sun Dec 20 2020 07:00:00 GMT+0700 (Western Indonesia Time)

aad = new Date("Decembe 20, 2020 10:45:47");
console.log(aad);       //Sun Dec 20 2020 10:45:47 GMT+0700 (Western Indonesia Time)

var aae;

aae = new Date("12/20/2019 08:15:30");
console.log(aae);         //Fri Dec 20 2019 08:15:30 GMT+0700 (Western Indonesia Time)

aae = new Date("12/20/2019 08:15:30 UTC");
console.log(aae);         //Fri Dec 20 2019 15:15:30 GMT+0700 (Western Indonesia Time)

aae= new Date("12/20/2019 08:15:30 GMT");
console.log(aae);         //Fri Dec 20 2019 15:15:30 GMT+0700 (Western Indonesia Time)


//Method Getter UTC
var aaf = new Date();

console.log(aaf.toISOString());         //2020-09-10T15:31:07.851Z
console.log(aaf.toJSON());             //2020-09-10T15:31:07.851Z
console.log(aaf.toUTCString());       //Thu, 10 Sep 2020 15:31:07 GMT
console.log(aaf.toDateString());     //Thu Sep 10 2020
console.log(aaf.toTimeString());    //22:31:07 GMT+0700 (Western Indonesia Time)
console.log(aaf.valueOf());        //1599751867851
console.log(aaf.getTime());       //1599751867851

var aag = new Date();
console.log(aag.getUTCFullYear());        //2020
console.log(aag.getUTCMonth());           //8
console.log(aag.getUTCDate());            //10
console.log(aag.getUTCDay());             //4
console.log(aag.getUTCHours());           //15
console.log(aag.getUTCMinutes());         //44
console.log(aag.getUTCSeconds());         //56
console.log(aag.getUTCMilliseconds());    //707

//Method Getter Locale
var aah = new Date();
console.log(aah.toLocaleDateString());   //9/10/2020
console.log(aah.toLocaleTimeString());   //10:44:56 PM
console.log(aah.toLocaleString());      //9/10/2020, 10:44:56 PM
console.log(aah.toString());            //Thu Sep 10 2020 22:44:56 GMT+0700 (Western Indonesia Time)

var aai = new Date();
console.log(aai.getFullYear());        //2020
console.log(aai.getMonth());           //8
console.log(aai.getDate());            //10
console.log(aai.getDay());             //4
console.log(aai.getHours());           //22
console.log(aai.getMinutes());         //49
console.log(aai.getSeconds());         //2
console.log(aai.getMilliseconds());    //238
console.log(aai.getTimezoneOffset())   //-420

//Method Setter UTC
var aaj = new Date();
console.log(aaj.toUTCString());     //Thu, 10 Sep 2020 15:57:31 GMT

aaj.setUTCFullYear(2020);
console.log(aaj.toUTCString());     //Thu, 10 Sep 2020 15:57:31 GMT

aaj.setUTCMonth(10);
console.log(aaj.toUTCString());     //Tue, 10 Nov 2020 15:57:31 GMT

aaj.setUTCDate(20);
console.log(aaj.toUTCString());     //Fri, 20 Nov 2020 15:57:31 GMT

aaj.setUTCHours(10);
console.log(aaj.toUTCString());     //Fri, 20 Nov 2020 10:57:31 GMT

aaj.setUTCMinutes(30);
console.log(aaj.toUTCString());     //Fri, 20 Nov 2020 10:30:31 GMT

aaj.setUTCSeconds(47);
console.log(aaj.toUTCString());     //Fri, 20 Nov 2020 10:30:47 GMT

aaj.setUTCMilliseconds(76);
console.log(aaj.toUTCString());     //Fri, 20 Nov 2020 10:30:47 GMT

//Method Setter Locale
var aak = new Date(0);
console.log(aak.toLocaleString());     //1/1/1970, 7:00:00 AM

aak.setFullYear(2020);
console.log(aak.toLocaleString());     //1/1/2020, 7:00:00 AM

aak.setMonth(04);
console.log(aak.toLocaleString());     //5/1/2020, 7:00:00 AM

aak.setDate(15);
console.log(aak.toLocaleString());     //5/15/2020, 7:00:00 AM

aak.setHours(06);
console.log(aak.toLocaleString());     //5/15/2020, 6:00:00 AM

aak.setMinutes(17);
console.log(aak.toLocaleString());     //5/15/2020, 6:17:00 AM

aak.setSeconds(15);
console.log(aak.toLocaleString());     //5/15/2020, 6:17:15 AM

aak.setMilliseconds(26);
console.log(aak.toLocaleString());     //5/15/2020, 6:17:15 AM

//Exercise Date Object - Day
var aal = new Date();
var Day = aal.getDay();
var nameDay;

switch(Day){
    case 0 : var nameDay = "Sunday"; break;
    case 1 : var nameDay = "Monday"; break;
    case 2 : var nameDay = "Tuesday"; break;
    case 3 : var nameDay = "Wednesday"; break;
    case 4 : var nameDay = "Thursday"; break;
    case 5 : var nameDay = "Friday"; break;
    case 6 : var nameDay = "Saturday"; break;
}
console.log(nameDay);   //Thursday

//Exercise Date Object - Month
var aam = new Date();
var Month = aam.getMonth();
var nameMonth;

switch (Month) {
    case 0 : var nameMonth = "January"; break;
    case 1 : var nameMonth = "February"; break;
    case 2 : var nameMonth = "March"; break;
    case 3 : var nameMonth = "april"; break;
    case 4 : var nameMonth = "May"; break;
    case 5 : var nameMonth = "June"; break;
    case 6 : var nameMonth = "July"; break;
    case 7 : var nameMonth = "August"; break;
    case 8 : var nameMonth = "Septembe"; break;
    case 9 : var nameMonth = "Oktobe"; break;
    case 10 : var nameMonth = "Novembe"; break;
    case 11 : var nameMonth = "Decembe"; break;
    
}
console.log(nameMonth);     //

//Exercise Date Object - Date

var aan = new Date();
var year1 = aan.getFullYear();
var month1 = aan.getMonth();
var calender1 = aan.getDate();
var day1 = aan.getDay();
var hours1 = aan.getHours();
var minute1 = aan.getMinutes();
var second1 = aan.getSeconds();

var nameDay1;
var nameMonth1;

switch(day1){
    case 0 : var nameDay1 = "Sunday"; break;
    case 1 : var nameDay1 = "Monday"; break;
    case 2 : var nameDay1 = "Tuesday"; break;
    case 3 : var nameDay1 = "Wednesday"; break;
    case 4 : var nameDay1 = "Thursday"; break;
    case 5 : var nameDay1 = "Friday"; break;
    case 6 : var nameDay1 = "Saturday"; break;
}



switch (month1) {
    case 0 : var nameMonth1 = "January"; break;
    case 1 : var nameMonth1 = "February"; break;
    case 2 : var nameMonth1 = "March"; break;
    case 3 : var nameMonth1 = "april"; break;
    case 4 : var nameMonth1 = "May"; break;
    case 5 : var nameMonth1 = "June"; break;
    case 6 : var nameMonth1 = "July"; break;
    case 7 : var nameMonth1 = "August"; break;
    case 8 : var nameMonth1 = "Septembe"; break;
    case 9 : var nameMonth1 = "Oktobe"; break;
    case 10 : var nameMonth1 = "Novembe"; break;
    case 11 : var nameMonth1 = "Decembe"; break;
    
}
var showDate = nameDay1+", "+calender1+", "+nameMonth1+", "+year1;
showDate +=" "+ hours1 + ":" + minute1+ ":" + second1;

console.log(showDate);    //Thursday, 10, Septembe, 2020 23:22:7


//difference in date
var startDate = new Date("06/05/2016");
var endDate = new Date("12/20/2016");
var diffrerenceDate = endDate - startDate;
var oneDay = 1000*60*60*24;
var difference = diffrerenceDate/oneDay;
console.log("Selisih tanggal = " + difference + " Hari");  //Selisih tanggal = 198 Hari


var startDate1 = new Date("08/17/1945");
var endDate1 = new Date(); // 07 Desember 2016
var diffDate = Math.abs(endDate1 - startDate1);
var oneDay1 = 1000*60*60*24;
var oneMonth1 = 1000*60*60*24*30;
var oneYear1 = 1000*60*60*24*365;
var diffYear = Math.floor(diffDate / oneYear1);
var diffMonth = Math.floor((diffDate - (diffYear * oneYear1)) /
oneMonth1);
var selisihHari = Math.floor((diffDate - (diffYear * oneYear1) -
(diffMonth * oneMonth1)) /oneDay1);
var res = diffYear+" Tahun "+diffMonth+" Bulan "+
selisihHari+" Hari";
console.log( res );      // 75 Tahun 1 Bulan 14 Hari



