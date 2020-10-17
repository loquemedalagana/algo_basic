const { hasUncaughtExceptionCaptureCallback } = require('process');

var N, M;

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
    graph.sort((first, second) => first.cost-second.cost);
    const parent = new Array(N + 1).fill(0).map((_, i) => i);

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

    let minCost = 0;
    for(let i=0; i < M; i++){
        let x = Find(graph[i].from);
        let y = Find(graph[i].to);

        if(x != y){
            Union(graph[i].from, graph[i].to);
            minCost += graph[i].cost;
        }
    }
    console.log(minCost);
}

const graph = [];

const start = rl => {
    rl.on('line', line => {
        let temp = line.split(' ');
        if(temp.length === 2) {
            N = parseInt(temp[0]);
            M = parseInt(temp[1]);
        }
        else {
            let edge = new Edge;
            edge.from = parseInt(temp[0]), edge.to = parseInt(temp[1]);
            edge.cost = parseInt(temp[2]);
            graph.push(edge);
        }

    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);