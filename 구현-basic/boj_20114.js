Set.prototype.union = set => new Set([...this, ...set]);

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    //console.log(H, W, H, inputs);
    const ans = inputs.reduce((acc, cur) => {
        let temp = new Array(N).fill('?');
        for(let i=0; i<cur.length; i++){
            if(cur.charAt(i) !== '?'){
                temp[Math.floor(i/W)] = cur.charAt(i)
            }
        }
        acc.push(temp.join(''));
        return acc;
    }, []).reduce((acc, cur, idx) => {
        if(idx === 0) return cur;
        let temp = '';
        for(let i=0; i<cur.length; i++){
            if(acc.charAt(i) === '?' && cur.charAt(i) === '?'){
                temp += '?';
            } else {
                temp += acc.charAt(i) === '?' ? cur.charAt(i) : acc.charAt(i);
            }
        }
        return temp;
    }, '');
    console.log(ans);
}

let N, H, W;
const inputs = [];

const start = rl => {
    rl.on('line', line => {
        if(!/[1-9]/.test(line)) inputs.push(line);
        else [N, H, W] = line.split(' ').map(Number);
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);