const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    const dp = Array.from(Array(T+1), () => Array(W+1).fill(-1));
    const func = (time, turn) => {
        if(time === T+1 && turn <= W) return 0;
        if(turn > 0) return 0;
        if(dp[time][turn] !== -1) return dp[time][turn];

        const pos = turn%2+1;
        dp[time][turn] = Math.max(func(time+1, turn), func(time+1, turn+1)) + Number(arr[time] === pos);
        return dp[time][turn];
    }
    console.log(Math.max(func(1, 0), func(1, 1)));
}

let lineCnt = 0, T, W;
const arr = [0];

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        const tempInput = line.split(' ').map(Number);
        if(lineCnt===1){
            [T, W] = tempInput;
        } else {
            arr.push(tempInput[0]);
        }
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);