//boj 9375랑 동일 문제
function solution(clothes) {
    var answer = 0;
    const list = clothes.reduce((acc, [name, kind]) => {
        const idx = acc.findIndex(e => e.kind === kind);
        if(idx === -1) acc.push({kind, clothes: [name]});
        else acc[idx].clothes.push(name);        
        return acc;
    }, []).map(e => e.clothes);  
    console.log(list);
    answer = list.reduce((acc, cur) => acc *= (cur.length+1), 1)-1;    
    return answer;
}

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = clothes => clothes.reduce((acc, [name, kind]) => {
    const idx = acc.findIndex(e => e.kind === kind);
    if(idx === -1) acc.push({kind, clothes: [name]});
    else acc[idx].clothes.push(name);        
    return acc;
}, []).map(e => e.clothes).reduce((acc, cur) => acc *= (cur.length+1), 1)-1;

let N, cnt = 0, arr = [];

const start = rl => {
    rl.on('line', line => {
        if(/[1-9]/.test(line)){
            cnt = 0; N = parseInt(line); arr = [];
        } else {
            cnt++; arr.push(line.split(' '));
            if(cnt === N) {
                console.log(solve(arr));
            }
        }
    }).on('close', () => {
        process.exit();
    })
}

start(rl);