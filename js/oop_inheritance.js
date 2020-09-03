//OOP Inheritance

class Car {
    constructor(brand) {
        this.brand = brand
    }
    present = () => `I have ${this.brand}`
}
class Product {
    static past = product => `My Product ${product}`
}

console.log(Product.past('Capucino'))   //My Product Capucino


class CarSUV extends Car {
    type = () => 'Passenger Car'
}
const myCar = new CarSUV('Toyota Innova');
console.log(myCar.present());   // I have Toyota Innova
console.log(myCar.type())       //Passenger Car


class Produce {
    constructor(merk){
        this.merk = merk
    }
    prod = () => `My Product ${this.prod,this.merk}`
}


const myProduct = new Produce('Honda Jazz');
console.log(myProduct.prod());



