const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const check = str => /^[A-F]{0,1}(A+F+C+)[A-F]{0,1}$/.test(str);

let lineCnt = 0, ans = 0, N;

const start = rl => {
    rl.on('line', line => {
        if(lineCnt === 0){
            N = parseInt(line);
        } else {
            console.log(check(line) ? 'Infected!' : 'Good');
            if(lineCnt === N){
                process.exit();
            }
        }
        lineCnt++;
    }).on('close', () => {
        process.exit();
    })
}

start(rl);