const intDiv = num => Math.floor(num);

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = input => {
    const N = parseInt(input[0][0]);
    const K = parseInt(input[0][1]);
    let sum = 0;

    for(let i=1; i<=K; i++){
        sum += i;
    }

    //console.log(sum);

    if(N/K < 2 || N - sum < 0) console.log(-1);
    else {
        console.log(N-sum === 0 ? K-1 : K);
    }
}

const input = [];

const start = rl => {
    rl.on('line', line => {
        input.push(line.split(' '));
    }).on('close', () => {
        solve(input);
        process.exit();
    })
}

start(rl);