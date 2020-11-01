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