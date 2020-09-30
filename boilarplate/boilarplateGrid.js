const checkSpace = str => { //공백 체크
    return str.search(/\s/) !== -1 ? true : false;
};

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = (inputNums, MAP) => {
    const R = parseInt(inputNums[0][0]);
    const C = parseInt(inputNums[0][1]);
    console.log(R, C, dr, dc);
    console.log(MAP);
    console.log(check);
}

const inputNums = [];
const MAP = [];
const check = [];
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const start = rl => {
    rl.on('line', line => {        
        if(checkSpace(line)){
            inputNums.push(line.split(' '));
        }
        else {
            let temp = new Array(Number(inputNums[0][1]));
            temp.fill(0);
            MAP.push(line.split(''));
            check.push(temp);
        }
    }).on('close', () => {
        solve(inputNums, MAP);
        process.exit();
    })
}

start(rl);