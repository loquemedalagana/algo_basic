//runtime err
function solutionOne(s) {
    console.log(s.split('').sort().reverse().join(''))
    const LowerCase = s.match(/[a-z]/g).map(e => String(e)).sort().reverse().join('');
    const UpperCase = s.match(/[A-Z]/g).map(e => String(e)).sort().reverse().join('');
    return LowerCase + UpperCase;
}

//correct ans
function solution(s) {
    return s.split('').sort().reverse().join('');
}