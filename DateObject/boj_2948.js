const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}
const rl = getReadLine();
const solve = ([day, month]) => {
    const dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(2009, month-1, day);
    console.log(dayNames[date.getDay()]);
}
const start = rl => {
    rl.on('line', line => {
        solve(line.split(' ').map(Number))
    }).on('close', () => {
        process.exit();
    })
}
start(rl);