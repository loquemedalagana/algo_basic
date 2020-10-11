const { gold } = require('color-name');

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    const check = new Array(N).fill(0);

    const dfs = (idx, str) => {
        if(idx === K){
            set.add(parseInt(str));
            return;
        }
        for(let i=0; i<N; i++){
            if(check[i]) continue;
            check[i]=1;
            dfs(idx+1, str + arr[i]);
            check[i]=0;
        }
    }
    dfs(0, '');
    console.log(set.size);
}

let lineCnt = 0;
let N, arr = [], K;
let set = new Set();

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        if(lineCnt < 2){
            N = parseInt(line);
        } else if (lineCnt === 2){
            K = parseInt(line);
        }
        else {
            arr.push(line);
        }
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);