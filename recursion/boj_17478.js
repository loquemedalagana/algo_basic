const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}
const rl = getReadLine();
const question = `"재귀함수가 뭔가요?"`;
const ansOne = `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`;
const ansTwo = `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`;
const ansThree = `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;

const ansBase = `"재귀함수는 자기 자신을 호출하는 함수라네"`;
const ansLast = `라고 답변하였지.`;
const lowDash = '____';

const solve = () => {
    console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');    
    const go = loop => {                
        console.log(lowDash.repeat(loop) + question);
        if(loop < N){
            console.log(lowDash.repeat(loop) + ansOne);
            console.log(lowDash.repeat(loop) + ansTwo);
            console.log(lowDash.repeat(loop) + ansThree);
            go(loop+1);
        }
        else if(loop === N){
            console.log(lowDash.repeat(loop) + ansBase);
        }
        console.log(lowDash.repeat(loop) + ansLast);
    }

    go(0);
}
let N;
const start = rl => {
    rl.on('line', line => {
        N = parseInt(line);
    }).on('close', () => {
        solve();
        process.exit();
    })
}
start(rl);