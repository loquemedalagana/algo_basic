function solution(s) {
    var answer = [];
    let list = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));
    answer = list.reduce((acc, cur) => {        
        cur.forEach(n => {
            const idx = acc.findIndex(e => e.num === n);
            if(idx === -1) acc.push({num: n, cnt: 1});
            else acc[idx].cnt++;
        })       
        return acc;
    }, []).sort((a, b) => b.cnt - a.cnt).map(e => e.num);
    console.log(list);
    return answer;
}

function solutionTwo(s) {
    var answer = [];
    let list = s.split('},{').reduce((acc, cur) => {
        acc.push(cur.split(/,|{{|}}/).reduce((acc, cur) =>  {
            if(cur !== '') acc.push(Number(cur)); return acc;
        }, []))
        return acc;
    }, []);
    answer = list.reduce((acc, cur) => {        
        cur.forEach(n => {
            const idx = acc.findIndex(e => e.num === n);
            if(idx === -1) acc.push({num: n, cnt: 1});
            else acc[idx].cnt++;
        })       
        return acc;
    }, []).sort((a, b) => b.cnt - a.cnt).map(e => e.num);
    //console.log(list);
    return answer;
}