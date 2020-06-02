//function1
function pagi() {
    console.log(" Selamat Pagi");
    console.log(" Good Morning");
}
pagi(); //Selamat Pagi
//Good Morning Function2
function malam() {
    return "Selamat Malam";
}
console.log(malam()); //Selamat Malam

var salam = malam();
console.log(salam); //Selamat Malam

//Function >>> Array
function hari() {
    var namaHari = [
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu"
    ];
    return namaHari;
}
function bulan() {
    var namaBulan = [
        "Januari", "Februari", "Maret"
    ];
    return namaBulan;
}

//FOR OFF

var har = hari();
console.log(har);

for (var value of har) {

    console.log(value); // ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
}


//FOR
var mon = bulan();
for (i = 0; i < mon.length; i++) {
    console.log(mon[i]);
}






