const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    arr.sort((a, b) => a.x-b.x); 
    const maxLength = K*2+1;

    let ans = 0;
    let left = 0, right = 0, sum = 0;

    while(left <= right && right < N){
        const length = arr[right].x - arr[left].x + 1;
        if(length > maxLength) {
            sum -= arr[left].g;
            left++;
            if(left < N && left > right) {
                right = left;
            }
        } else {
            sum += arr[right].g;
            right++;
        }
        ans = Math.max(ans, sum);
    }


    console.log(ans);
}

let lineCnt = 0;
var N, K, arr = [];
let maxPos = -1, minPos = Number.MAX_VALUE;

const start = rl => {
    rl.on('line', line => {
        lineCnt++;
        const tempInput = line.split(' ').map(Number);
        if(lineCnt < 2) {
            N = tempInput[0], K = tempInput[1];
        }
        else { //mapping
            maxPos = Math.max(maxPos, tempInput[1]);
            minPos = Math.min(minPos, tempInput[1]);
            arr.push({x: tempInput[1], g: tempInput[0]});
        }
    }).on('close', () => {
        solve();
        process.exit();
    })
}

start(rl);