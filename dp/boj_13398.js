const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    const dpEn = new Array(N).fill(0);
    const dpSt = new Array(N).fill(0);

    dpEn[0] = arr[0];
    dpSt[N-1] = arr[N-1];

    for(let i=1; i<N; i++){
        dpEn[i]=Math.max(arr[i], dpEn[i-1]+arr[i]);
    }

    for(let i=N-2; i>=0; i--){
        dpSt[i]=Math.max(arr[i], dpSt[i+1]+arr[i]);
    }

    let ans = dpEn[0];
    
    for(let i=1; i<N; i++) ans = Math.max(ans, dpEn[i]);
    for(let i=1; i<N-1; i++) ans=Math.max(ans, dpEn[i-1]+dpSt[i+1]);

    console.log(ans);
}

let lineCnt = 0, N, arr;

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        const tempInput = line.split(' ').map(Number);
        if(lineCnt<=1){
            N = tempInput[0];
        } else {
            arr = tempInput;
        }
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);