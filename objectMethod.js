const user = {
    name: "Jeon Inhyuk",
    age: 40,
    position: ['vocal', 'guitar']
}

for(const v in user) {
    console.log(user[v]);
}

console.log('group' in user);
console.log('name' in user);

//server에서 받아온 메소드로 클라이언트에서 확인하면 됨!