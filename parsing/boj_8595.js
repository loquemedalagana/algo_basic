const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}
const rl = getReadLine();
const solve = () => {
    console.log(inputs[1].match(/[0-9]+/g).map(Number).reduce((acc, cur) => acc += cur, 0));
}
let inputs = [];
const start = rl => {
    rl.on('line', line => {
        inputs.push(line);
    }).on('close', () => {
        if(/[0-9]/.test(inputs[1])) solve();
        else console.log(0);
        process.exit();
    })
}
start(rl);