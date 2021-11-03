let result = prompt('Выберите нужную операцию: add sub mult div');
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
if (result === 'add') {
    alert(`${num1} + ${num2} = ${+num1 + +num2}`);
} else if(result === 'sub') {
    alert(`${num1} - ${num2} = ${num1 - num2}`);
} else if(result === 'mult') {
    alert(`${num1} * ${num2} = ${num1 * num2}`);
} else if(result === 'div') {
    alert(`${num1} / ${num2} = ${num1 / num2}`);
} else {
    alert('Вы указали несуществующую операцию')
};

