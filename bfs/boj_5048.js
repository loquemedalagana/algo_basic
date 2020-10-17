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
    const inRange = (r, c) => r >= 0 && c >= 0 && r < N && c < M;
    const check = Array.from(Array(N+1), () => Array.from(Array(M+1), () => Array(4).fill(0)));

    const canGo = (r, c) => {
        for (let d = 0; d < 4; d++) {
            const nR = r + dr[d], nC = c + dc[d];
            if (!inRange(nR, nC)) continue;
            if (MAP[nR][nC] == '#') continue;
            if (MAP[nR][nC] == 'T') return false;
        }
        return true;
    }

    let ans = 0;
    let q = new Queue;

    for (let d = 0; d < 4; d++) {
		q.push({
            r: st.r,
            c: st.c,
            dir: d
        });
		check[st.r][st.c][d] = 1;
    }
    
    while (!q.empty()) {
		const r = q.front().r, c = q.front().c, dir = q.front().dir; q.pop();
		if (MAP[r][c] == 'G') {
			ans += 1;
			MAP[r][c] = '.';
		}
		const ok = canGo(r, c);
		if (!ok) continue;

		for (let d = 0; d < 4; d++) {
			const nR = r + dr[d], nC = c + dc[d];
            if (!inRange(nR, nC)) continue;
            if (check[nR][nC][d] || MAP[nR][nC] == '#') continue;
			check[nR][nC][d] = true;
			q.push({
                r: nR,
                c: nC,
                dir: d,
            });			
		}
	}

    console.log(ans);
}

let lineCnt = 0;
var N, M, st;
const MAP = [];
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        if(lineCnt === 1){
            const tempInput = line.split(' ').map(Number);
            [M, N] = tempInput;
        } else {
            MAP.push(line.split(''));
            MAP[lineCnt-2].forEach((e, idx) => {
                if(e === 'P'){
                    st = {r: lineCnt-2, c: idx};
                }
            })
        }
        
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);