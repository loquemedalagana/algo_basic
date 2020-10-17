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


const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    const inRange = (r, c) => {
        return r>=1 && c>=1 && r <= H && c <= W;
    }
    
    obstacles.forEach(({r, c, h}) => MAP[r][c] = h);

    let q = new Queue;

    for(let d=0; d<4; d++){
        const {r, c} = st;
        q.push({r, c, dir: d, f: F});
        check[r][c][d] = 1;
    }

    let ok = false;

    while(!q.empty()){
        const {r, c, dir, f} = q.front(); q.pop();
        if(en.r === r && en.c === c){
            ok=true;
            break;
        }

        for(let d=0; d<4; d++){
            const nR = r+dr[d], nC = c+dc[d];
            
            if(!inRange(nR, nC)) continue;
            if(check[nR][nC][d] === 1) continue;

            const diff = MAP[nR][nC] - MAP[r][c];

            if(diff > 0){
                if(diff <= f){
                    check[nR][nC][d] = 1;
                    q.push({r: nR, c: nC, dir: d, f: f-1});
                }
            }
            else if(diff <= 0 && f >= 1) {
                check[nR][nC][d] = 1;
                q.push({r: nR, c: nC, dir: d, f: f-1});
            }
            
        }
    }

    console.log(ok ? '잘했어!!' : '인성 문제있어??');
}

var H, W, O, F, st, en, cntO;
let MAP = [];
let check = [];
let obstacles = [];
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const start = rl => {
    rl.on('line', line => {        
        const temp = line.split(' ');
        if(temp.length === 8){
            cntO = 0;
            H = parseInt(temp[0]);
            W = parseInt(temp[1]);
            O = parseInt(temp[2]);
            F = parseInt(temp[3]);
            st = {r: parseInt(temp[4]), c: parseInt(temp[5])};
            en = {r: parseInt(temp[6]), c: parseInt(temp[7])};
            
            MAP = Array.from(Array(H+1), () => Array(W+1).fill(0));
            check = Array.from(Array(H+1), () => Array.from(Array(W+1), () => Array(4).fill(0)));
            obstacles = new Array;
        }
        else if (temp.length === 3){
            cntO++; 
            const r = parseInt(temp[0]);
            const c = parseInt(temp[1]);
            const h = parseInt(temp[2]);
            obstacles.push({r, c, h});

            if(cntO === O){
                solve();
            }
        }
    }).on('close', () => {
        process.exit();
    })
}

start(rl);

/*
3
3 3 7 5 1 1 3 3
1 2 4
1 3 8
2 1 1
2 2 2
2 3 4
3 1 8
3 2 4
3 5 3 6 1 1 3 5
1 2 8
2 1 8
3 1 4
3 3 4 4 1 1 3 3
1 2 4
2 1 4
2 3 2
3 2 2
*/