//wrong answer
//맞왜틀??
const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const permutation = arr => {
    return arr.reduce((list, element) => {
        let newList = [];
        list.forEach(seq => {
            for(let i = seq.length; i>=0; i--){
                let newSeq = [].concat(seq);
                newSeq.splice(i, 0, element);
                newList.push(newSeq);
            }
        })
        return newList;
    }, [[]]);
}

const solve = input => {
    const TC = parseInt(input[0]);
    console.log(TC, input);
    for(let i=1; i<=TC; i++){
        console.log(`Case # ${i}:`)
        const arr = input[i][0].split('');
        let ord = [];
        
        for(let j=0; j<arr.length; j++){
            ord.push(j);
        }

        let res = permutation(ord); res.sort();
        res.forEach(seq => {
            let charArr = [];
            seq.forEach(idx => charArr.push(arr[idx]));
            console.log(charArr.join(''));
        });
    }
}

const input = [];

const start = rl => {
    rl.on('line', line => {
        input.push(line.split(' '));
    }).on('close', () => {
        solve(input);
        process.exit();
    })
}

start(rl);