const num = prompt('Введите число');
let res = true;
if (num >= 2) {
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        res = false;
        break; 
    }
}
    alert(res);
} else {
    alert('false');
}
