//#1
// const arr = ['a', 'b', 'c', 'd'];
// console.log(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);

//#2
// const arr = [2, 5, 3, 9];
// const result = arr[0] * arr[1] + arr[2] * arr[3];
// console.log(result);

//#3
// const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// console.log(arr[1][0]);

//#4
// const obj = {
//     js:['jQuery', 'Angular'], 
//     php: 'hello', 
//     css: 'world',
// }
// console.log(obj.js[0]);

//#5
// const arr = [];
// let str = '';
// for(let i = 0; i < 8; i++ ) {
//     str += 'x';
//     arr.push(str);
// }
// console.log(arr);

//#6
// const arr = [];
// let num;
// for(let i = 1; i < 8; i++ ) {
//     num = '';
//     for(let k = 1; k <= i; k++) {
//         num += i;
//     }
//     arr.push(num);
// }
// console.log(arr);

//#7
// function arrayFill(item, num) {
//     const arr = [];
//     for(let i = 1; i <= num; i++ ) {
//         arr.push(item);
//     }
//     return console.log(arr);
// }
// arrayFill('x', 5);

//#8
// const arr = [2, 2, 1, 2, 2, 1, 2, 5, 3, 9];
// let num = 0;
// let i;
// for(i = 0; i < arr.length; i++) {
//     num += arr[i];
//     if(num > 10) break;
// }
// console.log(`Нужны первые ${i} элементов чтобы их сумма была > 10`);

//#9
// const arr = [1, 2, 1, 2, 2, 1, 2, 5, 3, 9];
// const arr2 = [];
// for(let i = arr.length-1; i >= 0; i--) {
//     arr2.push(arr[i]);
// }
// console.log(arr2);

//#10
// const arr = [ [1, 2, 3], [4, 5], [6] ];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr[i].length; k++) {
//         sum += arr[i][k];   
//     }
// }
// console.log(sum);

//#11
// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr[i].length; k++) {  
//         for (let j = 0; j < arr[i][k].length; j++) {
//             sum += arr[i][k][j];   
//         }
//     }
// }
// console.log(sum);


// с помощью флат и редьюс

// const array = [ [1, 2, 3], [4, 5], [6] ];
// const array2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// function sumArr(arr) {
//     const res = arr.flat(2).reduce((sum, item) => sum + item);
//     return res;
// }
// console.log(sumArr(array));
// console.log(sumArr(array2));