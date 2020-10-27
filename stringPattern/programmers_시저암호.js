const ascii = a => a.charCodeAt(0); 
function solution(s, n) {
    const inputs = s.split('').map(ascii);
    const res = inputs.map(e => {
        if(e === 32) return ' ';
        else if(e >= 65 && e <= 90) {
            if(e + n > 90){
                e -= 26;
            }
        } else {
            if(e + n > 122){
                e -= 26;
            }
        }
        return String.fromCharCode(e + n);
    });
    return res.join('');
}