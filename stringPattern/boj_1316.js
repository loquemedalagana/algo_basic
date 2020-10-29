const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const isGroupWord = str => {
    for(let i=0; i<str.length; i++){
        const c = str.charAt(i);
        const subStr = str.slice(i+1).split('');
        if(subStr.indexOf(c) > 0){
            if(c !== subStr[subStr.indexOf(c)-1]) return false;
        }
    }
    return true;
}

let lineCnt = 0;
let ans = 0;

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        if(lineCnt > 1) ans += Number(isGroupWord(line));
    }).on('close', () => {
        console.log(ans);
        process.exit();
    })
}

start(rl);