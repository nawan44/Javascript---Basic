//Spread Operator Argumen
function angka2(...abc){
    console.log(abc[0]);     //4
    console.log(abc[1]);     //5
    console.log(abc[2]);     //6
    console.log(abc[3]);     //8
}
angka2(4, 5, 6, 8);

function angka3(a, b, ...def){
    console.log(a);     // 2
    console.log(b);     // 3.4
    console.log(def);   // [7, 8, 5, 7]
}
angka3(2, 3.4,7, 8, 5, 7);


function rata2(...allArg){
    var totArg = allArg.length;
    var hasil = 0;
    for (var i of allArg){
        hasil = hasil +i;
    }
    return hasil/totArg;
}

var z = rata2(9, 10);
console.log(z);     // 9.5

var a = rata2(1, 2, 3, 4);
console.log(a);     // 2.5

var x = rata2(11, 22, 34, 57, 89, 78);
console.log(x);     // 48.5