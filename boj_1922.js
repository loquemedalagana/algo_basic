//아직안품
const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {

}

const inputs = [];

const start = rl => {
    rl.on('line', line => {
        inputs.push(line.split(' '));
    }).on('close', () => {
        solve(input);
        process.exit();
    })
}

start(rl);