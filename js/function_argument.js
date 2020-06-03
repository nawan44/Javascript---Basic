//ARGUMENT#1

function selamat(who) {
    return "Selamat Pagi " + who;
}

var salam = selamat("Bekasi");
console.log(salam); //Selamat Pagi Bekasi
console.log(selamat("Jakarta")); //Selamat Pagi Jakarta

//ARGUMENT#2

function juh(kapan, siapa) {
    return "Selamat " + kapan + " " + siapa;
}

console.log(juh("Pagi", "Jakarta"));    //Selamat Pagi Jakarta
console.log(juh("Siang", "Bandung"));   //Selamat Pagi Bandung

//ARGUMENT#3

function bagi2(a, b, c, d){
    var hasil = (a + b + c +d)/4;
    return hasil;
}

var nilai1 = bagi2(1,2,3,4);
console.log(nilai1);    //3.5 <Nilai Argumen Pas>

var nilai2 = bagi2(7, 1, 2);
console.log(nilai2)    //NaN <Nilai Argumen Kurang>

var nilai3 = bagi2(9,8,7,6,5,4);
console.log(nilai3);    //7.5 <Nilai Argumen Lebih, diambil cuman 9,8,7,6>

//ARGUMENT#4
function abcd(a = 10, b = 10, c = 10, d = 10){
    var hasilabcd = (a + b + c + d)/4;
    return hasilabcd;
}

var nilaiabcd1= abcd();
console.log(nilaiabcd1);     //10 <menggunakan semua argumen>

var nilaiabcd2 = abcd(20);
console.log(nilaiabcd2);     //12.5 <nilai a = 20, sisanya mengikuti argumen>

var nilaiabcd3 = abcd(20, 5, 30);
console.log(nilaiabcd3);    // 16.25 <nilai a=20, b=5, c=30, d= mengikuti argumen>

//ARGUMENT#5
function defg(d, e, f = 10, g = 10){
    var hasildefg = (d + e + f + g)/4;
    return hasildefg;
}

var nilaidefg1 = defg(20);
console.log(nilaidefg1);     //NaN <harus minimal ada 2 argumen

var nilaidefg2 = defg(20, 40);
console.log(nilaidefg2);     //20

var nilaidefg3= defg(4, 4, 4, 4);
console.log(nilaidefg3);     //4


//ARGUMEN#6
function hijk(h = 10, i=10 , j, k){
    var hasilhijk = (h + i + j + k)/4;
    return hasilhijk;
}

var nilaihijk1 = hijk(20);
console.log(nilaihijk1);    //NaN <harus ada 4 nilai>

var nilaihijk2 = hijk(20, 40, 5);
console.log(nilaihijk2);    //NaN <harus ada 4 nilai>

var nilaihijk3 = hijk(3, 3, 3, 3);
console.log(nilaihijk3);    //3

//ARGUMEN#7
function hijk(h = 10, i=10 , j, k){
    var hasilhijk = (h + i + j + k)/4;
    return hasilhijk;
}

var nilaihijk4 = hijk(undefined, undefined, 20, 20);
console.log(nilaihijk4);    //15


//ARGUMEN OBJEK

function angka4567(){
    console.log(arguments[0]);    //4
    console.log(arguments[1]);    //5
    console.log(arguments[2]);    //6
    console.log(arguments[3]);    //7    
}
angka4567(4, 5, 6, 7);


function angka8910(){
    var total8910 = arguments.length;
    return total8910;
}

var a8910 = angka8910(1, 1, 9, 8, 9, 7, 4, 2, 2, 0);
console.log(a8910);     //10


//ARGUMEN OBJEK II

function rata2ku(){
    var totalrata2ku = arguments.length;
    var hasilrata2ku = 0;
    for (var irata2ku = 0; irata2ku<totalrata2ku; irata2ku++ ){
        hasilrata2ku = hasilrata2ku + arguments[irata2ku];
    }    
    return hasilrata2ku/totalrata2ku;
}

var arata2ku = rata2ku(2, 7);
console.log(arata2ku);     //4.5


