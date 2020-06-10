var nama = ["Aba", "Bada", "Cici", "Dia", "Eka"];
var jumlah_nama = nama.length;

console.log("Jumlah nama = " + jumlah_nama);

for(var i = 0; i < jumlah_nama; i++){
    console.log(nama[i]);
}


// LOOPING DO WHILE
var i = 1;
do {
    console.log(i+ " kuadrat = " + i*i);
    i = i + 1;
}
while(i <=100);