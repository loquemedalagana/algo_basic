const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    const ok = (one, two) => Math.pow((cows[one].x-cows[two].x), 2) + Math.pow((cows[one].y-cows[two].y), 2) <= Math.pow(cows[one].power, 2);
    let ans = 0;
    const check = new Array(N).fill(0);

    const dfs = cur => {
        check[cur] = 1;
        for(let next=0; next<N; next++){
            if(!check[next]  && ok(cur, next)) dfs(next);
        }
    }

    for(let i=0; i<N; i++){
        let temp = 0;
        dfs(i);
        for(let j=0; j<N; j++){
            temp += check[j];
            check[j] = 0;
        }
        ans = Math.max(ans, temp);
    }

    console.log(ans);
    
}

var N, lineCnt = 0;
var cows = [];

const start = rl => {
    rl.on('line', line => {
        const tempInput = line.split(' ').map(Number);
        if(lineCnt < 1){
            N = tempInput[0];
        } else {
            cows.push({x: tempInput[0], y:tempInput[1], power: tempInput[2]});
        }
        lineCnt++;
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);