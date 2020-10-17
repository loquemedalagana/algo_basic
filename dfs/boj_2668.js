const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    const dfs = cur => {
        check[cur] = 1;
        //console.log(cur);
        const next = arr[cur];
        selected[next]--;
        if(!check[next] && !selected[next]) dfs(next);
    }

    for(let i=1; i<=N; i++){
        if(!check[i] && !selected[i]) dfs(i);
    }

    let cnt = 0, ans = [];

    for(let i=1; i<=N; i++){
        if(selected[i]) {
            cnt++;
            ans.push(i);
        }
    }
    console.log(cnt);
    ans.forEach(element => console.log(element));
}

const arr = [];
let inputCnt = 0, N, check, selected;

const start = rl => {
    rl.on('line', line => {
        inputCnt++;
        if(inputCnt > 1){
            const element = parseInt(line);
            arr.push(element);
            selected[element]++;
        }
        else{
            arr.push(0);
            N = parseInt(line);
            check = new Array(N+1).fill(0);
            selected = new Array(N+1).fill(0);
        }
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);