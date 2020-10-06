const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    const segment = K*2+1;
    let sum = 0;
    let prefixSum = new Array(maxPos+1).fill(0);

    const info = new Map([...map].sort((a, b) => a[0] > b[0] ? 1 : -1));
    
    for(let i=minPos; i<=maxPos; i++){
        if(info.has(i)){
            sum+=info.get(i);
            console.log(sum);
            prefixSum[i] = sum;
        }
        else{
            prefixSum[i] = prefixSum[i-1];
        }
    }
    console.log(prefixSum);
}

let lineCnt = 0;
var N, K, map;
let maxPos = -1, minPos = Number.MAX_VALUE;

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        const tempInput = line.split(' ').map(Number);
        if(lineCnt < 2) {
            N = tempInput[0], K = tempInput[1];
            map = new Map();
        }
        else { //mapping
            map.set(tempInput[1], tempInput[0]);
            maxPos = Math.max(maxPos, tempInput[1]);
            minPos = Math.min(minPos, tempInput[1]);
        }
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);