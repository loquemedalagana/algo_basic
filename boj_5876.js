const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    let ans = 0;

    const inRange = (r, c) => r >= 0 && r < N && c >=0 && c<N;

    const dfs = (r, c, left, right) => {
        if(left.length > N*N/2) return;
        if(left.length === right.length) {
            ans = Math.max(ans, check[r][c]);
        }
        //console.log(left, right);
        //str.slice(-1); last string char
        for(let d=0; d<4; d++){
            const nR = r+dr[d], nC = c+dc[d];
            if(inRange(nR, nC) && !check[nR][nC]){
                if(MAP[nR][nC] === '(' && MAP[r][c] === '(') {
                    check[nR][nC] = check[r][c] + 1;
                    dfs(nR, nC, left + '(', right);
                    check[nR][nC] = 0;
                } else if (MAP[nR][nC] === ')' && MAP[r][c] === '('){
                    check[nR][nC] = check[r][c] + 1;
                    dfs(nR, nC, left, right + ')');
                    check[nR][nC] = 0;
                } else if (MAP[r][c] === ')' && MAP[nR][nC] === ')'){
                    check[nR][nC] = check[r][c] + 1;
                    dfs(nR, nC, left, right + ')');
                    check[nR][nC] = 0;
                }
            }
        }
    }

    if(MAP[0][0] === ')') return console.log(0);
    else {
        check[0][0] = 1;
        //console.log(check);
        dfs(0, 0, MAP[0][0], '');
        console.log(ans);
    }
}

let lineCnt = 0, N;
const MAP = [];
const check = [];
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        if(lineCnt<2){
            N = parseInt(line);
        } else {
            MAP.push(line.split(''));
            const temp = new Array(N).fill(0);
            check.push(temp);
        }
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);