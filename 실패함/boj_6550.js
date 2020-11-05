// https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
// https://javascript.info/regexp-methods
//시간 초과

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = ([subStr, str]) => {
    let regModel = '([a-zA-Z]?|[a-zA-Z]+)';
    for(let i=0; i<subStr.length; i++){
        regModel += subStr.charAt(i) + '([a-zA-Z]?|[a-zA-Z]+)';
    }
    const reg = new RegExp(regModel, 'g');
    return reg.test(str);
}

const start = rl => {
    rl.on('line', line => {
        console.log(solve(line.split(' ')) ? 'Yes' : 'No');
    }).on('close', () => {
        process.exit();
    })
}

start(rl);