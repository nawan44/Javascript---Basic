var hari = new Date().getDay();

switch (hari) {
    case 0:
        var hari = "Minggu";
        break;
    case 1:
        var hari = "Senin";
        break;
    case 2:
        var hari = "Selasa";
        break;
    case 3:
        var hari = "Rabu";
        break;
    case 4:
        var hari = "Kamis";
        break;
    case 5:
        var hari = "Jumat";
        break;
    case 6:
        var hari = "Sabtu";
        break;
}
console.log(hari);

if (hari === "Selasa") {
    console.log("Saatnya bekerja");
} else {
    console.log("Masih Libur");
}

var foo = "Aku";
console.log("Kamu adalah " + foo);

if ((typeof foo === "number") && (foo >= 10)) {
    console.log("foo bertipe number");
    console.log("nilai foo lebih besar dari 10");
} else if ((typeof fo === "number") && (foo < 10)) {
    console.log("foo bertipe number");
    console.log("nilai foo lebih kecil dari 10");
} else if (typeof foo === "string") {
    console.log("foo bertipe string");
} else {
    console.log("foo bukan bertipe number maupun string")
}

//NESTED IF ELSE

var foo = 4;
console.log("nilai foo =" + foo);

if (typeof foo === "number") {
    console.log("foo beetipe number");

    if (foo >= 10) {
        console.log("nilai foo lebih besar dari 10");
    } else {
        console.log("nilai foo lebih kecil dari 10");
    }
} else if (typeof foo === "string") {
    console.log("foo bertipe string");
} else {
    console.log("foo bukan bertipe number maupun string");
}


//OPERATOR CONDITIONAL
var jumlah_barang = 400;
var total;

if(jumlah_barang > 500){
    total = jumlah_barang *100;
} else {
    total = jumlah_barang * 150;
}
console.log(total);

var jumlah_barang = 1000;
var total;

total = jumlah_barang > 500? jumlah_barang * 100 : jumlah_barang * 150;
console.log(total);
