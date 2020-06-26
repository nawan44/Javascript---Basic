for (var i = 1; i < 10; i++) {
    console.log("Hello Indonesia");
}

var i = 1;
for (; i <= 10; i++) {
    console.log("Hello JavaScript " + i);
}

//TRIANGLE PYRAMID 7


document.write("<center>");
for (var i = 8; i >0; i--) {
    for (var x = 1; x <= i; x++) {
        document.write("*");
    }

    document.write("<br/>");
}
document.write("</center>")

//TRIANGLE PYRAMID 7

document.write("<center>");
for (var i = 0; i <= 7; i++) {
    for (var x = 0; x <= i; x++) {
        document.write("*");
    }

    document.write("<br/>");
}
document.write("</center>")



//SQUARE 7

var size = 7, i, j;

for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        document.write("*");
    }
    document.write("<br/>");
    document.write("</center>");
}

//LOOPING TRIANGLE NUMBER
for (c = 1; c<=5; c++){
    for (d=4; d >= c; d--){
        document.write(" ");
    }
    for (d=1; d<=c; d++){
        document.write(d);
    }
    document.write ( "<br/>");
}

//LOOPING TRIANGLE NUMBER
for (e = 1; e<=5; e++){
    for (f=4; f >= e; f--){
        document.write(" ");
    }
    for (f=e; f>=1; f--){
        document.write(f);
    }
    document.write ( "<br/>");
}



//LOOPING TRIANGLE NUMBER
for (a = 1; a <=5; a++){
    for (b=a; b >= 1; b--){
        document.write(b);
    }
    document.write ( "<br/>");
}

for (g=1; g<=5; g++){
    for(h=5; h>=g; h--){
        document.write(h);
    }
    document.write("<br>");

}


//LOOPING FOR OF
var nama = ["Ada", "Bia", "Cici", "Desi", "Elly"];
for( var i of nama){
    console.log(i);
}

