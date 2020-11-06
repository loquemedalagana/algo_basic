function solution(record) {
    var answer = [];
    const user = new Map();
    const newRecord = [];

    record.forEach(str => {
        const [state, uid, name] = str.split(' ');
        if(state === 'Enter') {
            user.set(uid, name);
            newRecord.push([uid, '님이 들어왔습니다.']);
        } else if (state === 'Leave') {
            newRecord.push([uid, '님이 나갔습니다.'])
        } else {
            user.delete(uid);
            user.set(uid, name);
        }
    })

    answer = newRecord.map(([uid, state]) => user.get(uid)+state);

    return answer;
}