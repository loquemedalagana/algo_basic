const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    let ans = '';
    for(let i=0; i<mxLength; i++){
        for(let j=0; j<inputs.length; j++){
            if(inputs[j].charAt(i)) ans += inputs[j].charAt(i);
        }
    }
    console.log(ans);
}

const inputs = []; let mxLength = Number.MIN_SAFE_INTEGER;

const start = rl => {
    rl.on('line', line => {
        inputs.push(line); mxLength = Math.max(mxLength, line.length);
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);