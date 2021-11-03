const num = prompt('Введите число');
let res = `${num} простое число`;
if (num >= 2) {
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        res = `Наименьший делитель числа ${num} это ${i}`;
        break; 
    }
}
    alert(res);
} else {
    alert('NaN');
}