// 1.

let numOrStr = prompt('Введите число');

if(numOrStr === null || numOrStr.trim() === '') {
    alert('Фууу')
}else if ( numOrStr === 'Привет'){
    alert('привет!')
}else {
    alert('OK!')
}

// 2.

// let numOrStr = prompt('Введите число');

// switch (numOrStr) {
//     case null:
//         alert('Вы отменили');
//         break;
//     case numOrStr.trim() === '' && numOrStr:
//         alert('Вы ничего не ввели');
//         break;
//     case  isNaN(numOrStr) && numOrStr:
//         alert('Это не число (');
//         break;
//     default:
//         alert('Все ок!');
// }

