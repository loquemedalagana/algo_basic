const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    inputs.sort((a, b) => {
        if(a.num === b.num) {
            if(a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            else return 0;
        }
        return b.num-a.num;
    })
    console.log(inputs[0].name);
}

const inputs = [];

const start = rl => {
    rl.on('line', line => {
        const temp = line.split(' ');
        if(/[a-zA-Z]/.test(line)){
            inputs.push({
                name: temp[0],
                num: parseInt(temp[1])
            })
        }
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);