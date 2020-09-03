// class intro

class Car {
    constructor(brand){
        this.brand = brand
    }
}

const newCar = new Car ('brand')
console.log(newCar)


//Class Method

class Car1{
    constructor(brand1){
        this.brand1 = brand1
    }
    present =() =>
        `I have ${this.brand1}`
}
    class Product {
        static present = product => `My Product ${product}`
    }

console.log(Product.present('Capucino'))

