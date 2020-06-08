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

