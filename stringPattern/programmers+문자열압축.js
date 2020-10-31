function solution(s) {
    var answer = Number.MAX_SAFE_INTEGER;

    const calc = len => {
        const ret = []; let cnt = 0, cntArr = [];
        for(let i=0; i<s.length; i+=len){
            const cur = s.slice(i, i+len);
            //console.log(cur, ret[ret.length-1]);
            if(cur !== ret[ret.length-1]){
                if(ret.length > 0) cntArr.push(cnt);
                ret.push(cur);
                cnt = 1;
            } else {
                cnt++;
                //console.log(cur, cnt);
            }
        }
        cntArr.push(cnt);
        //const res = (ret + cntArr.filter(e => Number(e) > 1)).join('');
        //console.log(ret.join('').length)
        //console.log(cntArr.filter(e => Number(e) > 1).join('').length);
        //console.log(ret, cntArr);
        return ret.join('').length + cntArr.filter(e => Number(e) > 1).join('').length;
        //console.log(ret, cntArr.filter(e => Number(e) > 1));
    }

    for(let i=1; i<=Math.floor(s.length/2); i++){
        answer = Math.min(calc(i), answer);
        //answer = Math.min(answer, calc(i));
    }
    if(s.length === 1) answer = 1;
    return answer;
}