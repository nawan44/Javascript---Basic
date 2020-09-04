
// const firstName = () =>{
//     return new Promise (resolve => {
//         setTimeout(() => {
//             const data = 'Rachmat'
//             resolve(data)
//         }, 1000);
//     }

//     )
// }

// const lastName = name => {
//     return new Promise (resolve =>{
//         setTimeout(() =>{
//             const data = `Gunawan`
//             resolve(data)

//         }, 1000);
//     }

//     )
// }

// // firstName().then (data=> lastName(data) ).then (result =>console.log(result))

// const resulName = async () => {
//     const first = await firstName();
//     const last = await lastName();
//     return `${first} ${last}`
// }

// resulName().then(result => console.log(result))

const fetch = require ('node-fetch');
const callData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    return data.json()
}
callData().then(result => console.log(result))