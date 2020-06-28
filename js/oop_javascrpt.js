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

//ARGUMENT CONSTRUCTOR
class Car2 {
    constructor(merkcar2, typecar2, pricecar2){
        this.merk2 = merkcar2;
        this.type2 = typecar2;
        this.price2 = pricecar2;
    }
}

var carIra = new Car2("Ferrari Enzo", "Sport", 15000000000);
console.log(carIra.merk2);   //Ferrari Enzo
console.log(carIra.type2);    //Sport

var carAri = new Car2("Mitsubishi Pajero", "SUV", 750000000);
console.log(carAri.merk2);    //Mitsubishi Pajero
console.log(carAri.type2);    //SUV

//CLASS METHOD
class Car3{
    constructor(merk3, type3, price3) {
        this.merk3 = merk3;
        this.type3 = type3;
        this.price3 = price3;
    }
    starton1(){
        return "Engine Start";
    }
}

var carJudi = new Car3 ("Renault One", "MPV", 45000003);
console.log( carJudi.merk3);         //Renault One
console.log(carJudi.starton1());     //MPV

var carJuni = new Car3 ("Jaguar x1", "Sport", 176000003);
console.log(carJuni.merk3);       //Jaguar x1
console.log(carJuni.starton1);   //Sport

//CLASS METHOD2
class Car4 {
    constructor(owner4, merk4, type4, price4){
        this.owner4 = owner4;
        this.merk4 = merk4;
        this.type4 = type4;
        this.price4 = price4;
    }
    starton2(){
        return "Engine "+this.merk4+" start";
    }
    goesto(place){
        return "Goes To "+place+" with "+this.merk4;
    }
}

var carAceng = new Car4("Aceng", "Mercedes AMG", "Sport", 25000000);
console.log(carAceng.owner4);       //Aceng
console.log(carAceng.starton2());   //Engine Mercedes AMG start
console.log(carAceng.goesto("Bandung")); //

var carEdoy = new Car4("Edoy", "Mc Learn A1", "Sport", 34600000);
console.log(carEdoy.merk4);        //Mc Learn A1
console.log(carEdoy.starton2());  //Engine Mc Learn A1 start


//Making object with constrfuctor Functions
function Car5 (merk5, type5, price5){
    this.merk5 = merk5;
    this.type5 = type5;
    this.price5 = price5;
    this.staron3 = function (){
        return "Engine ON";
    };
    this.goesto1 = function (place1){
        return "Goes To "+place1+" with "+this.merk5;
    }
}

var carAkung = new Car5("Daihatsu Luxio", "MPV", 107000000);
var carFaruk = new Car5("Honda CRV", "SUV", 23500000);

console.log(carAkung.merk5);
console.log(carFaruk.staron3);
console.log(carAkung.goesto1("Bali"));

console.log(carAkung instanceof Car5);
console.log(carFaruk instanceof Car5);




