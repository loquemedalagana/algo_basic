function solution(m, musicinfos) {
    const deleteSharp = melody => melody.replace(/C#/g, 'c').replace(/D#/g, 'd').replace(/F#/g, 'f').replace(/G#/g, 'g').replace(/A#/g, 'a');
    
    var answer = '';
    m = deleteSharp(m);
    
    //마지막 정렬을 위해 조건별로 파싱
    const info = musicinfos.map((e, idx) => {
        const temp = e.split(','); //콤마로 먼저 파싱

        //시간:분 단위로 재파싱
        const st = temp[0].split(':').map(Number), en = temp[1].split(':').map(Number);
        let playedTime;
        if(st[0] === en[0]) playedTime = en[1]-st[1];
        else {
            //이 부분 예외처리 신경쓰기-_-;;
            if(en[0] < st[0]) {
                en[0] = en[0] + 24;
            };
            const diff = en[0] - st[0];
            playedTime = en[1]+60*diff - st[1]
        };
        
        temp[3] = deleteSharp(temp[3]);
        const songTime = temp[3].length; 

        const repeatTime = Math.floor(playedTime/songTime);
        const cutted = playedTime%songTime;
        
        const melody = temp[3].repeat(repeatTime) + temp[3].slice(0, cutted);
        
        console.log(repeatTime, cutted, melody);
        return ({
            st,
            en,
            playedTime,
            title: temp[2],
            melody,
            idx
        })
    });
    
    //멜로디랑 비교하는 부분(어려움)
    const list = info.filter(({melody}) => {
        let ok = false;
        const reg = new RegExp(m, 'g');
        ok = reg.test(melody);
        return ok;
    }).sort((a, b) => {
        if(a.playedTime === b.playedTime){
            //return a.st[0] - b.st[0];
            return a.idx - b.idx;
        }
        return b.playedTime - a.playedTime;
    })
    
    //console.log(info)
    //console.log(list)
    return answer = list.length === 0 ? '(None)': list[0].title;
}

