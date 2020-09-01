const helloWorld = () => {
    return "hello world"
}

const myName = name => {
    return `hello my name is ${name}`
}

const nameAge = (name, age) => {
    return `hello my name ${name}, and my age is ${age}`;

}
const callAge = age =>  `my age is ${age}`   
console.log(nameAge('Rachmat',29));