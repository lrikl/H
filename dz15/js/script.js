function padString(string, leng, symb, side = true) {
    if (typeof string !== 'string') return 'это не строка';
    if (typeof leng !== 'number' || isNaN(leng) || leng < 0) return 'вы неправильно задали длинну строки';
    if (typeof symb !== 'string' || symb > symb.substr(0,1) ||symb.trim() === '') return 'введите 1 символ';
    if (typeof side !== 'boolean') return 'вы неправильно указали сторону true/false';
    let str = string.trim();
    let allSymb = '';
    if (str.length < leng)  {
        const numSymb = leng - str.length;
        for (let i = 0; i < numSymb; i++) {
            allSymb += symb;
        }
    } else if (str.length > leng) {
        str = str.substr(0,leng);
    } 
    if (side === true) {
        str = str + allSymb;
    } else if (side === false) {
        str = allSymb + str;
    }
    return str;
}

console.log(padString('hello',10,'*',false));