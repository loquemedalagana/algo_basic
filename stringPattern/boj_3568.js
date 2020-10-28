const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    //console.log(inputs);
    inputs.forEach((str, idx) => {
        if(idx === 0) return;
        let varType = inputs[0] + ' ';
        const temp = str.replace(alphabetPattern, '').split('').reverse().join('').replace(/]\[/gi, '[]');
        
        //varType = varType.replace(/\s/g, '');

        const varName = str.match(alphabetPattern).join('');
        console.log(`${(varType + temp).replace(/\s/g, '')} ${varName};`); 
    })
}

var inputs;
const alphabetPattern = /[a-zA-Z]/g;

const start = rl => {
    rl.on('line', line => {
        inputs = line.split(' ').map((str, idx) => {
            if(idx === 0) return str;
            else return str.slice(0, -1);
        });
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);