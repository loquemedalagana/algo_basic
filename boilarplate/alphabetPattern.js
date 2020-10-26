//upper case
const upperCase = [];
for(let i=65; ; i++){
    const alpha = String.fromCharCode(i);
    upperCase.push(alpha);
    if(alpha === 'Z') break;
}

const lowerCase = [];
//lower case
for(let i=97; ;i++){
    const alpha = String.fromCharCode(i);
    lowerCase.push(alpha);
    if(alpha === 'z') break;
}

console.log(upperCase);
console.log(lowerCase);