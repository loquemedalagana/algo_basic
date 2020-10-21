const { constants } = require('crypto');

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
    let MAP = Array.from(Array(N), () => Array(N));
    
    
    for(let turn =0; turn <K; turn++){
        while(!q.empty()){
            const {
                r, c, m, s, d
            } = q.front(); q.pop();

            let nR = (r + dr[d] * s)%N, nC = (c + dc[d] * s)%N;
            console.log(r, c,  nR, nC);
            if (nR < 0) {
                nR += N;
            }
            if (nC < 0) {
                nC += N;
            }
            console.log(nR, nC);
            if(!MAP[nR][nC] || MAP[nR][nC] === undefined || MAP[nR][nC] === null){
                MAP[nR][nC] = [];
            }
            MAP[nR][nC].push({
                r: nR,
                c: nC,
                m,
                s,
                d
            });
        }

        for (let i = 0; i < N; i++) {
			for (let j = 0; j < N; j++) {
                if(!MAP[i][j]) continue;

                if (MAP[i][j].length == 1) {
					q.push(MAP[i][j][0]);
				}
				else { //divide
                    // use reduce arr https://ratseno.tistory.com/25
                    const initialSum = {
                        mass: 0,
                        speed: 0,
                        even: false,
                        odd: false
                    }
                    //무게의 합, 속력의 합

                    const res = MAP[i][j].reduce((acc, cur) => {
                        acc.mass += cur.m;
                        acc.speed += cur.s;
                        acc.even = acc.even || (cur.d%2 === 0);
                        acc.odd = acc.odd || (cur.d%2 === 1);
                        return acc;
                    }, initialSum);
                    console.log(res);
                    const cnt = MAP[i][j].length;
                    const {
                        mass,
                        speed,
                        even,
                        odd
                    } = res;

                    const newMass = Math.floor(mass/5);
                    const newSpeed = Math.floor(speed/cnt);

                    if(newMass > 0){
                        for(let k=0; k<4; k++){
                            const nd = k*2 + Number(even && odd);
                            q.push({
                                r: i,
                                c: j,
                                m: newMass,
                                s: newSpeed,
                                d: nd
                            })
                        }
                    }
				}

				MAP[i][j] = [];
            } 
        }
    }

    let ans = 0;

    while(!q.empty()){
        ans += q.front().m; q.pop();
    }
    console.log(ans);
}

var N, M, K;
let q = new Queue;
let lineCnt = 0;
const dr = [ -1, -1, 0, 1, 1, 1, 0, -1 ];
const dc = [ 0, 1, 1, 1, 0, -1, -1, -1 ];

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        const tempInput = line.split(' ').map(Number);
        if(lineCnt == 1){
            [N, M, K] = tempInput;
        } else {
            [r, c, m, s, d] = tempInput;
            q.push({
                r,
                c,
                m,
                s,
                d
            })
        }
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);