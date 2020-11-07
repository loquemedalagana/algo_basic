const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}
const rl = getReadLine();

const start = rl => {
    rl.on('line', line => {
        console.log(line.split(',').map(Number).reduce((acc, cur) => acc += cur, 0));
    }).on('close', () => {
        process.exit();
    })
}

start(rl);