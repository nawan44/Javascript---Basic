
// REST OPERATOR
const number = (...number) => {
    return number
}

const sorting = (...number) => {
    return number.sort()
}
console.log(sorting(5,4,6,7,2,1,8))

//SPREAD OPERATOR

const myObj = {
    name : 'Rachmat',
    age : 29
}

const {name, age} = myObj;
console.log(name, age);



const myArray = ['Gunawan', 30]
const [named, aged] = myArray;
console.log(named, aged);

