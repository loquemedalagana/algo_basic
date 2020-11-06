function solutionOne(a, b) {
    const date = new Date(`2016/${a}/${b}`);
    console.log(date);
    console.log(date.toString());
    var answer = date.toString().slice(0, 3);
    return answer.toUpperCase();
}

function solutionTwo(a, b) {
    const date = new Date(2016, a-1, b);
    var answer = date.toString().slice(0, 3);
    return answer.toUpperCase();
}