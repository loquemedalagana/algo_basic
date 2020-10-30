const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const check = str => {
    if(/(w+o+l+f+)+$/g.test(str) && str.length % 4 === 0){
        return str.split(/(w+o+l+f+)/).filter(s => s.length >= 4).reduce((acc, cur) => {
            const len = cur.length / 4;
            return 'w'.repeat(len)+'o'.repeat(len)+'l'.repeat(len)+'f'.repeat(len) === cur;
        }, true);
    } else return false;
};

const start = rl => {
    rl.on('line', line => {
        console.log(Number(check(line)));
    }).on('close', () => {
        process.exit();
    })
}

start(rl);

//반례 wowollff