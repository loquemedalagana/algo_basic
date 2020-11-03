const solution = (genres, plays) => genres.map((e, idx) => ({
    genre: e, play: plays[idx], num: idx
})).sort((a, b) => {
    if(a.play === b.play) return a.idx - b.idx;
    return b.play - a.play;
}).reduce((acc, cur) => {
    const idx = acc.findIndex(e => e.genre === cur.genre);
    if(idx === -1) acc.push({genre: cur.genre, sum: cur.play, list: [cur.num]});
    else {
        acc[idx].sum += cur.play; if(acc[idx].list.length < 2) acc[idx].list.push(cur.num);
    }
    return acc;
}, []).sort((a, b) => b.sum - a.sum).reduce((acc, {list}) =>  acc = acc.concat(list), []);