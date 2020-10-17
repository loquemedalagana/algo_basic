const { normalize } = require('path');

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
    const inRange = (r, c) => r >= 0 && c >= 0 && r < N && c < N;
    const check = Array.from(Array(N), () => Array.from(Array(N), () => Array(4).fill(INF)));

    const bfs = (st, en) => {
        let q = new Queue;

        for(let d=0; d<4; d++){
            check[st.r][st.c][d] = 0;
            q.push({
                r: st.r,
                c: st.c,
                dir: d,
                cnt: 0
            })
        }

        while(!q.empty()){
            const {r, c, dir, cnt} = q.front(); q.pop();

            const nR = r+dr[dir], nC = c+dc[dir];
            if(!inRange(nR, nC)) continue;
            if(MAP[nR][nC] === '*') continue;

            if(check[nR][nC][dir] > check[r][c][dir]){
                check[nR][nC][dir] = check[r][c][dir];
                q.push({
                    r: nR,
                    c: nC,
                    dir: dir,
                    cnt: cnt,
                })

                //change dir
                if(MAP[nR][nC] === '!'){
                    for(let d=0; d<4; d++){
                        if(d === dir || d !== dir^1) continue;
                        if(check[nR][nC][d] > check[r][c][dir]+1){
                            check[nR][nC][d] = check[r][c][dir]+1;
                            q.push({
                                r: nR,
                                c: nC,
                                dir: d,
                                cnt: cnt+1
                            })
                        }
                    }
                }
            
            }

        }
    }

    bfs(doors[0], doors[1]);

    console.log(Math.min.apply(null, check[doors[1].r][doors[1].c]));
}

let lineCnt = 0;
var N;
const INF = 1e9;
const MAP = [];
const doors = [];
const check = [];
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const start = rl => {
    rl.on('line', line => {
        if(lineCnt === 0){
            N = parseInt(line);
        } else {
            const temp = line.split('');            
            temp.forEach((e, i) => {
                if(e === '#') {
                    doors.push({r: lineCnt-1, c: i});
                }
            })
            MAP.push(temp);
        }
        lineCnt++;
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);