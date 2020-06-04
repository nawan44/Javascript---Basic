//Part1
var hitung = function rata2(a,b){
    return (a+b)/2;
}
console.log(hitung(5,6));     //5.5
// console.log(rata2(1, 2));     // ReferenceError: rata2 is not defined

var hitung1 = function rata21(a1, b1){
    return (a1 + b1)/2;
}
console.log(hitung1(2, 4));    //3


function rata22(a2, b2){
    return (a2+b2)/2;
}
function tambah1(c, d){
    return c + d;
}
var hasil = tambah1(6, rata22(5, 7));
console.log(hasil);       //12