var soy = "Hello Indonesia";
var kai = soy.trim(6, 14);
console.log(kai);       //Hello Indonesia

var say = new String ("hello indo");
var kar = say.trim(6, 2);
console.log(kar);       //hello indo


class Car{
    constructor(myMerk, myType, myPrice ){
        this.merk = myMerk;
        this.type = myType;
        this.price = myPrice;
    }
}
var carAndi = new Car( "Toyota Innova", "MPV", 175000000);
console.log(carAndi.merk);       //Toyota Innova
console.log(carAndi.price);      //175000000

var carJoko = new Car( "Audi A8", "Sport", 455000000);
console.log(carJoko.merk);      //Audi A8
console.log(carJoko.price);     //455000000

//CLASS PROPERTY
class carBudi {
    constructor (){
        this.merk1 = "Daihatsu Xenia";
        this.type1 = "MPV";
        this.price1 - 239000000;
    }
}

var carBudiX = new carBudi();
console.log(carBudiX);     //carBudi {merk1 : "Daihatsu Xenia", type1: "MPV" }
