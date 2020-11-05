function solution(lines) {
    var answer = 0;
    
    const inputs = lines.map(e => e.split(' ').reduce((acc, cur, idx) => {
        if(idx === 1){
            acc.en = Number(cur.replace(/[^0-9]/g, ''));
        } else if (idx === 2){
            //console.log(cur.indexOf('.'), cur.indexOf('s'))
            const pointIdx = cur.indexOf('.'), secIdx = cur.indexOf('s');
            acc.lapsed = cur;
            if(pointIdx === -1) acc.lapsed = Number(cur.replace('s', ''))*1000;
            else if (secIdx - pointIdx === 4) acc.lapsed = Number(cur.replace('s', '').replace('.', ''));
            else if (secIdx - pointIdx === 3) acc.lapsed = Number(cur.replace('s', '').replace('.', ''))*10;
            else if (secIdx - pointIdx === 2) acc.lapsed = Number(cur.replace('s', '').replace('.', ''))*100;
        }
        
        //calc start
        if(acc.lapsed !== undefined && acc.en !== undefined) {
            acc.st = acc.en - acc.lapsed + 1; 
            let enStr = acc.st.toString().split('');
            if(enStr[2] === '9') enStr[2] = '5'; //어짜피3초이내이므로...
            if(enStr[4] === '9') enStr[4] = '5';
            
            acc.st = Number(enStr.join(''));
            
            //acc.en += 999;
            acc.st /= 1000; acc.en /= 1000;
            
        };
        return acc;
    }, {st: undefined, en: undefined, lapsed: undefined}));
    //console.log(inputs); 
    
    const stTime = Math.floor(inputs[0].st), enTime = Math.ceil(inputs[inputs.length-1].en);
    //console.log(stTime, enTime);
    
    for(let i=0; i<inputs.length; i++){
        let cnt = 0;
        let stSection = inputs[i].st; 
        let enSection = stSection + 1;
        
        for(let j=0; j<inputs.length; j++){
            const {st, en} = inputs[j];
            if(st >= stSection && st < enSection) cnt++;
            else if (en >= stSection && en < enSection) cnt++;
            else if (st <= stSection && en >= enSection) cnt++;
        }
        answer = Math.max(answer, cnt);
        
        cnt = 0;
        stSection = inputs[i].en, enSection = inputs[i].en + 1;
        
        for(let j=0; j<inputs.length; j++){
            const {st, en} = inputs[j];
            if(st >= stSection && st < enSection) cnt++;
            else if (en >= stSection && en < enSection) cnt++;
            else if (st <= stSection && en >= enSection) cnt++;
        }       
        
        answer = Math.max(answer, cnt);
        
    }
    
    
    
    return answer;
}