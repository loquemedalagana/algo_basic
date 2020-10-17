const checkSpace = str => { //공백 체크
    return str.search(/\s/) !== -1 ? true : false;
};

const inRange = (r, c, R, C) => {
    return r>=0 && c>=0 && r < R && c < C;
}

function Queue() {
    this.elements = [];

    Queue.prototype.push = element => {
        this.elements.push(element);
    }
    
    Queue.prototype.pop = () => this.elements.shift();
    Queue.prototype.empty = () => this.elements.length === 0;
    Queue.prototype.front = () => !this.empty() ? this.elements[0] : undefined;
    Queue.prototype.size = () => this.elements.length;
    
}

function Pair (first, second) {
    this.first = first;
    this.second = second;
}

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const bfs = (r, c, cnt, R, C) => {
    const pos = new Pair(r, c);
    check[r][c] = cnt;
    let q = new Queue();
    q.push(pos);

    let sheep = 0, wolf = 0;

    while(!q.empty()){
        const r = q.front().first, c = q.front().second; q.pop();

        if(MAP[r][c] === 'o') sheep++;
        else if(MAP[r][c] === 'v') wolf++;

        for(let d=0; d<4; d++){
            const nR = r+dr[d], nC=c+dc[d];
            if(!inRange(nR, nC, R, C) || check[nR][nC] !== 0 || MAP[nR][nC] === '#') continue;

            check[nR][nC] = cnt;
            q.push(new Pair(nR, nC));
        }
    }

    if(sheep > wolf) wolf = 0;
    else sheep = 0;

    return {sheep: sheep, wolf: wolf};
}

const solve = (inputNums, MAP) => {
    const R = parseInt(inputNums[0][0]);
    const C = parseInt(inputNums[0][1]);
    let cnt = 0, sheep = 0, wolf = 0;

    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(check[i][j]!== 0 || MAP[i][j] === '#') continue;
            const search = bfs(i, j, ++cnt, R, C);
            sheep += search.sheep, wolf += search.wolf;
        }
    }

    console.log(sheep, wolf);
}

const inputNums = [];
const MAP = [];
const check = [];
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const start = rl => {
    rl.on('line', line => {        
        if(checkSpace(line)){
            inputNums.push(line.split(' '));
        }
        else {
            let temp = new Array(Number(inputNums[0][1]));
            temp.fill(0);
            MAP.push(line.split(''));
            check.push(temp);
        }
    }).on('close', () => {
        solve(inputNums, MAP);
        process.exit();
    })
}

start(rl);