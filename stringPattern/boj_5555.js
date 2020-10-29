const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}
const rl = getReadLine();
let lineCnt = 0, ans = 0, subStr;
const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        if(lineCnt === 1) subStr = line;
        else if(lineCnt > 2) ans += Number((line+line).includes(subStr)); 
    }).on('close', () => {
        console.log(ans);
        process.exit();
    })
}
start(rl);