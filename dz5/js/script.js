//Task #1 
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

//Task #2
const user2 = {   //const защищает от изменений только саму переменную, но не еe свойства. 
    name: 'John',
};
user.name = 'Pete';
console.log(user2);

//Task #3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
};
alert(`sum: ${sum}`);