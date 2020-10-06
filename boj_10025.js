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

let lineCnt = 0;

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        const tempInput = line.split(' ').map(Number);
        console.log(lineCnt, tempInput);
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);