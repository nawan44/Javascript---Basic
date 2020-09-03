const callData = callback => {
    setTimeout(() => {
        const data = 'Rachmat';
        callback(data);
    }, 3000);
}

callData( name => console.log(`My Name Is ${name}`))