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

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
var N;

function solution(land, height) {
    N = land.length;
    const area = Array.from(Array(N), () => Array(N).fill(-1));
    const inRange = (r, c) => r>=0 && c>=0 && r<N && c<N;
    const info = [];
    
    const bfs = (stR, stC, cnt) => {
        let q = new Queue;
        area[stR][stC] = cnt;
        q.push({
            r: stR,
            c: stC
        });
        
        while(!q.empty()){
            const {r, c} = q.front(); q.pop();
            
            for(let d=0; d<4; d++){
                const nR = r+dr[d], nC = c+dc[d];
                if(!inRange(nR, nC)) continue;
                
                if(area[nR][nC] === -1 && Math.abs(land[nR][nC] - land[r][c]) <= height){
                    area[nR][nC] = cnt;
                    q.push({
                        r: nR,
                        c: nC
                    });
                } else if (area[nR][nC] != area[r][c] && area[nR][nC] !== -1){
                    const edge = {
                        from: area[r][c],
                        to: area[nR][nC],
                        cost: Math.abs(land[nR][nC] - land[r][c])
                    }
                    
                    //const idx = info.findIndex(({from, to}) => from === edge.from && to === edge.to);
                    //if(idx === -1){
                        info.push(edge);
                    //} else {
                   //     info[idx].cost = Math.min(info[idx].cost, edge.cost);
                   // }
                    
                }
                
            }
            
        }
        
        
        
    }
    
    var answer = 0;
    let cnt = 0;
    
    //divide areas
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(area[i][j] !== -1) continue;
            bfs(i, j, cnt++);
        }
    }
    
    //console.log(area);
    
    info.sort((first, second) => first.cost-second.cost);
    const parents = new Array(cnt).fill(0).map((_, i) => i);
    
    const Find = x => {
        if(x === parents[x]) return x;
        else {
            return parents[x] = Find(parents[x]);
        }
    }
    
    const Union = (x, y) => {
        x = Find(x);
        y = Find(y);
        parents[x] = y;
    }
    
    //console.log(info);
    
    info.forEach(({from, to, cost}) => {
        const x = Find(from), y = Find(to);
        if(x != y){
            Union(from, to);
            answer+=cost;
        }
    })
    
    return answer;
}