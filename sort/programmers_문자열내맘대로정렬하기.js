function solution(strings, n) {
    var answer = strings.sort().sort((a, b) => {
        if(a.charAt(n) < b.charAt(n)) return -1;
        else if (a.charAt(n) > b.charAt(n)) return 1;
        else return 0;
    })
    return answer;
}