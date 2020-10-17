//memory limit excessed
const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}
const rl = getReadLine();
const solve = input => {
    let falseCnt = 0, trueCnt = 0;    
    for(let i=1; i<=input[0]; i++){
        if(input[i] === 0) falseCnt++;
        else trueCnt++;
    }
    console.log(trueCnt > falseCnt ? "Junhee is cute!" : "Junhee is not cute!");
}
const input = [];
const start = rl => {
    rl.on('line', ip => {
        const element = parseInt(ip);
        input.push(element);
    }).on('close', () => {
        solve(input);
        process.exit();
    })
}
start(rl);