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



//SWITCH
var situs = "twitter";

switch (situs){
    case "google" :
    console.log('<a href ="http://www.google.com">Situs Google</a>');
    break;
    case "facebook":
    console.log('<a href="http://facebook.com">Situs Facebook</a>');
    break;
    case "twitter":
    console.log('<a href="http://twitter.com">Situs Twitter</a>');
    break;
    default:
    console.log("Situs tidak ada");

}            