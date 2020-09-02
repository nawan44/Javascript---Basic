
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

const copyObject = {... myObj, collage : 'Mercubuana'}
console.log(copyObject)

const myArray = ['Gunawan', 30]
const copymyArray = [... myArray, 'Cumlaude']
console.log(copymyArray)