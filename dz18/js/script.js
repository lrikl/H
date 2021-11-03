function mainFunction(cb) {
    const a = prompt('Введите число');
    const b = prompt('Введите число'); 
    return cb(a, b);
}

function exponentiation(x1, x2) {
    const res = alert(`${x1} ** ${x2} = ${x1 ** x2}`);
    return res;
}

function multiplay(x1, x2) {
    const res = alert(`${x1} * ${x2} = ${x1 * x2}`);
    return res;
}

function division(x1, x2) {
    const res = alert(`${x1} / ${x2} = ${x1 / x2}`);
    return res;
}

function modulo(x1, x2) {
    const res = alert(`${x1} % ${x2} = ${x1 % x2}`);
    return res;
}

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);