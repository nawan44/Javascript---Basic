var soy = "Hello Indonesia";
var kai = soy.trim(6, 14);
console.log(kai);

var say = new String ("hello indo");
var kar = say.trim(6, 2);
console.log(kar);


class Car{
    constructor(myMerk, myType, myPrice ){
        this.merk = myMerk;
        this.type = myType;
        this.price = myPrice;
    }
}
var carAndi = new Car( "Toyota Innova", "MPV", 175000000);
console.log(carAndi.merk);
console.log(carAndi.price);

var carJoko = new Car( "Audi A8", "Sport", 455000000);
console.log(carJoko.merk);
console.log(carJoko.price);