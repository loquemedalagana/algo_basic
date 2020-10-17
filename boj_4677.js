const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    const inRange = (r, c) => r >= 0 && c >= 0 && r < N && c < M;
    const check = Array.from(Array(N), () => Array(4).fill(0));
    
    const dfs = (r, c, cnt) => {
        check[r][c] = cnt;
        for (let d = 0; d < 8; d++) {
            const nR = r + dr[d], nC = c + dc[d];
            if (inRange(nR, nC)) {
                if(MAP[nR][nC] === '@' && !check[nR][nC]){
                    dfs(nR, nC, cnt);
                }
            }
        }
    }

    let cnt = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (check[i][j] || MAP[i][j] == '*') continue;
            dfs(i, j, ++cnt);
        }
    }
    console.log(cnt);
}

var N, M, lineCnt = 0;
const numPattern = /[0-9]/;
let MAP = [];
const dr = [-1, 1, 0, 0, -1, 1, -1, 1];
const dc = [0, 0, -1, 1, -1, 1, 1, -1];

const start = rl => {
    rl.on('line', line => {
        if(numPattern.test(line)){
            const tempInput = line.split(' ').map(Number);
            MAP = [], lineCnt = 0;
            N = tempInput[0], M = tempInput[1];
        } else {
            lineCnt++;
            MAP.push(line.split(''));
            if(lineCnt === N){
                solve();
            }
        }
    }).on('close', () => {
        process.exit();
    })
}

start(rl);