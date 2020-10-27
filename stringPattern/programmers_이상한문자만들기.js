function solution(s) {
    var answer = [];    
    const inputs = s.split(' ');    
    inputs.forEach(word => {
        const temp = word.split('').map((e, idx) => idx%2 ? e.toLowerCase() : e.toUpperCase()).join('');
        answer.push(temp);
    })  
    return answer.join(' ');
}