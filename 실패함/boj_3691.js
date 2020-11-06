const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const solve = () => {
    //check

    //calc cost


    //binary search
    const bs = () => {

    }

    const info = inputs.reduce((acc, cur) => {
        const [type, name, priceStr, qualityStr] = cur.split(' ');        
        const newElement = {
            name,
            price: Number(priceStr),
            quality: Number(qualityStr)
        }
        const idx = acc.findIndex(e => e.type === type);
        if(idx === -1){
            acc.push({
                type,
                list: [newElement]
            })
        } else {
            acc[idx].list.push(newElement)
        }
        return acc;
    }, []).map(e => e.list.sort((a, b) => {
        if(a.price === b.price) {
            return a.quality - b.quality;
        }
        return a.price - b.price;
    }))
    console.log(info);
    console.log(info.length);
}

let lineCnt = 0, N, M, inputs = [];

const start = rl => {
    rl.on('line', line => {
        if(!/[a-zA-Z]/.test(line)){
            lineCnt = 0; inputs = [];
            const tempInput = line.split(' ').map(Number);
            if(tempInput.length === 2){
                [N, M] = tempInput;
            }
        } else {
            lineCnt++;
            //parse
            inputs.push(line);
            //solve
            if(lineCnt === N){
                solve();
            }
        }        
    }).on('close', () => {
        //solve();
        process.exit();
    })
}

start(rl);