// const callData = callback => {
//     setTimeout(() => {
//         const data = 'Rachmat';
//         callback(data);
//     }, 3000);
// }
// const callDataAgain =(firstName, callback) =>{
//     setTimeout(() => {
//         const data = `${firstName} Rachmat `;
//         callback(data);
//     }, 3000);
// }



// callData( name => callDataAgain(name, result => console.log(result)))

const firstName = () =>{
    return new Promise (resolve => {
        setTimeout(() => {
            const data = 'Rachmat'
            resolve(data)
        }, 3000);
    }

    )
}

const lastName = name => {
    return new Promise (resolve =>{
        setTimeout(() =>{
            const data = '$(name) Gunawan'
            resolve(data)

        }, 3000);
    }

    )
}

firstName().then (data=> lastName(data) ).then (result =>console.log(result))