const { parse } = require('path');

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = input => {
    const N = parseInt(input[0]);
    const M = parseInt(input[1]);
    let ans = 0;

    input[2].sort((first, second) => first-second);

    console.log(input[0], input[1], input[2]);
    console.log(input);

    for(let i=0; i<N; i++){
        let j = N-1;
        const p = parseInt(input[2][i]);
        while(i<j){
            const q = parseInt(input[2][j]);
            if(p+q === M) ans++;
            j--;
        }
    }
    console.log(ans);
}

const input = [];
const start = (rl) => {
    rl.on('line', line => {
        input.push(line.split(' '));
    }).on('close', () => {
        solve(input);
        process.exit();
    })
}

start(rl);