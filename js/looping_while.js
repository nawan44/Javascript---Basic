var i = 1;
while (i <= 10) {
    console.log("Hallo");
    i++;
}

var a = 100;
while (a > 0) {
    console.log(a + " * 5 = " + a * 5);
    a = a - 5;
}

var b = 1;
while (b <= 10) {
    if (b === 5) {
        break;
    }
    console.log("Hello Javascript" + b);
    b = b + 1;
}