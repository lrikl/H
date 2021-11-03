//Task #1

// const x = 10;
// const y = 7;
// (x > y) ? alert('x больше, чем y'): alert('x не больше, чем y');

//Task #2

// const num = prompt('Введите число');
// if (num % 2 === 0) {
//     alert('Число ' + num + ' четное');
// } else {
//     alert('Число ' + num + ' нечетное');
// }

//Task #3 

// const x = prompt('Введите целое число'); 
// let value;
// let leng;
// if (x === null || x.trim() === '' || isNaN(x)) {
//     alert('Жаль, но вы не ввели число');
// } else if (+x === 0 ) {
//     alert("Вы ввели ноль");
// } else {

//     if (x > 0 ){
//         value = ' положительное';
//     } else {
//         value = ' отрицательное';
//     }

//     if (String(Math.abs(x)).length === 1) {
//         leng = ' однозначное';
//     } else if (String(Math.abs(x)).length === 2) {
//         leng = ' двухзначное';
//     } else if (String(Math.abs(x)).length === 3) {
//         leng = ' трехзначное';
//     } else {
//         leng = ' многозначное';
//     }
//     alert(`Число ${x.trim()} ${value} ${leng}`);
// } 

//Task #4
    
// const x1 = +prompt('Введте число 1');
// const x2 = +prompt('Введте число 2');
// const x3 = +prompt('Введте число 3');

//  if (x1 > x2 && x1 > x3) {
//     alert(`Число ${x1} максимальное`);
// } else if (x2 > x1 && x2 > x3) {
//     alert(`Число ${x2} максимальное`);
// } else if (x3 > x1 && x3 > x1) {
//     alert(`Число ${x3} максимальное`);
// } else {
//     alert('Попробуйте еще раз, вы неправильно указали значения');
// }

//Task #5

// const a = +prompt('Введте сторону а');
// const b = +prompt('Введте сторону b');
// const c = +prompt('Введте сторону c');
// if (a > 0 && b > 0 && c > 0){
//     if (a + b > c ) {
//         alert(`такой треугольник может существовать`);
//     } else {
//         alert('такой треугольник не может существовать');
//     }
// } else {
//     alert('Отрицательные значения')
// }





