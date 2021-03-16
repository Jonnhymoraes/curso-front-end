const user1 = {
    name: 'Jonnhy',
    idade: 23
}

const user2 = {
    name: "Alguém",
    idade: 22
}

function newObj ( { name: oldName, idade: oldAge }, user2 ) {
 return ({oldName, oldAge, ...user2});
}

newObj(user1, user2);