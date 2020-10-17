var N, M;

function Edge (from, to, cost) {
    this.from = from;
    this.to = to;
    this.cost = cost;
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
    const parent = new Array(N).fill(0).map((_, i) => i);
    let adj = new Array(N);
    let check = new Array(N);

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

    //bfs
    const bfs = cur => {
        let q = new Queue;
        check.fill(-1);
        check[cur] = 0; q.push(cur);

        while(!q.empty()){
            const now = q.front(); q.pop();
            adj[now].forEach(next => {
                if(check[next.to] === -1){
                    check[next.to] = check[now] + next.cost;
                    q.push(next.to);
                }
            })
        }
    }

    let minCost = 0;
    for(let i=0; i < M; i++){
        let x = Find(graph[i].from);
        let y = Find(graph[i].to);
        if(x != y){
            Union(graph[i].from, graph[i].to);
            minCost += graph[i].cost;

            if(adj[graph[i].from] === undefined) adj[graph[i].from] = [];
            adj[graph[i].from].push({to: graph[i].to, cost: graph[i].cost});
            if(adj[graph[i].to] === undefined) adj[graph[i].to] = [];
            adj[graph[i].to].push({to: graph[i].from, cost: graph[i].cost});
        }
    }
    console.log(minCost);

    let maxCost = 0;
    bfs(0);

    let stVertex = 0;

    for(let i=0; i<N; i++){
        if(check[i] > check[stVertex]) stVertex = i;
    }

    bfs(stVertex);
    console.log(Math.max.apply(null, check));
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