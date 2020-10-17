function Queue() {
    this.elements = [];
    Queue.prototype.push = element => {
        this.elements.push(element);
    }
    Queue.prototype.size = () => this.elements.length;  
    Queue.prototype.back = () => !this.empty() ? this.elements[this.size()-1] : -1;    
    Queue.prototype.empty = () => this.elements.length === 0 ? 1 : 0;
    Queue.prototype.front = () => !this.empty() ? this.elements[0] : -1;

    Queue.prototype.pop = () => {
        const ret = this.front();
        if(!q.empty()) this.elements.shift();
        return ret;
    };
}

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();
let q = new Queue;
const alphabetPattern = /[a-zA-Z]/;

const start = rl => {
    rl.on('line', line => {
        const Inputs = line.split(' ');
        if(alphabetPattern.test(Inputs[0])) {
            switch(Inputs[0]){
                case 'push':
                    q.push(parseInt(Inputs[1]));
                    break;
                case 'pop':
                    console.log(q.pop());
                    break;
                case 'size':
                    console.log(q.size());
                    break;
                case 'empty':
                    console.log(q.empty());
                    break;
                case 'front':
                    console.log(q.front());
                    break;
                case 'back':
                    console.log(q.back());
                    break;
            }
        }

    }).on('close', () => {
        process.exit();
    })
}

start(rl);