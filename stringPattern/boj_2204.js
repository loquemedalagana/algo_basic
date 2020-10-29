const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    arr.sort((a, b) => {
        if(a.toUpperCase() > b.toUpperCase()) return 1;
        else if (a.toUpperCase() < b.toUpperCase()) return -1;
        else return 0;
    });
    console.log(arr[0]);
}

let lineCnt = 0, N, arr;

const start = rl => {
    rl.on('line', line => {
        if(lineCnt === 0){
            N = parseInt(line);
            arr = [];
            if(N === 0) process.exit();
        } else {
            arr.push(line);
        }
        if(lineCnt === N) {
            solve();
            lineCnt = 0;
        } else lineCnt++;
    }).on('close', () => {
        process.exit();
    })
}

start(rl);