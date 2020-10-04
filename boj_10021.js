function Edge (from, to, cost) {
    this.from = from;
    this.to = to;
    this.cost = cost;
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
    const Find = x => {
        if(x === parent[x]) return x;
        else {
            return parent[x] = Find(parent[x]);
        }
    }
    
    const Union = (x, y) => {
        x = Find(x);
        y = Find(y);
        parent[x] = y;
    }

    for(let i=0; i<N-1; i++){
        for(let j=i+1; j<N; j++){
            const cost = Math.pow(vertexes[i].x-vertexes[j].x,2) + Math.pow(vertexes[i].y-vertexes[j].y,2);
            const adj = new Edge(i, j, cost);
            if(cost >= C) mst.push(adj);
        }
    }
    mst.sort((first, second) => first.cost - second.cost);
    const parent = new Array(N).fill(0).map((_, i) => i);

    let minCost = -1;

    mst.forEach(adj => {
        const x = Find(adj.from), y = Find(adj.to);
        if(x != y){
            Union(adj.from, adj.to);
            if(minCost === -1) minCost = 0;
            minCost += adj.cost;
        }
    })

    console.log(minCost);
}

var N, C;
const mst = [];
let vertexes = [];
let lineCnt = 0;

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        let temp = line.split(' ');
        if(lineCnt < 2) {
            N = parseInt(temp[0]);
            C = parseInt(temp[1]);
        }
        else {
            vertexes.push({x: parseInt(temp[0]), y: parseInt(temp[1])});
        }

    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);