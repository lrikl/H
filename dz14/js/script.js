function calcPow(a, b = 1) {
    if (a === null || isNaN(a) || b === null || isNaN(b)) {
        return 'some error';
    }
    return a ** b;
}
const num = prompt('Введите число');
const pow = prompt('Введите степень');
const result = calcPow(num,pow);
alert(result);
