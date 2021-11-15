// #1
// const arr = [1, 2, 3];
// const upArr = arr.concat([4, 5, 6]);
// console.log(upArr);

//#2
// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

//#3
// const arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

//#4
// const arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// #5
// const arr = ['js', 'css', 'jq'];
// console.log(arr.shift());

// #6
// const arr = ['js', 'css', 'jq'];
// console.log(arr.pop());

// #7
// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.slice(0,3);
// console.log(arr2);

//#8
// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.slice(-2);
// console.log(arr2);

//#9
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);

//#10
// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.slice(1,4);
// console.log(arr2);

//#11
// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//#12
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

//#13
// const arr = [3, 4, 1, 2, 7];
// arr.sort();
// console.log(arr);

//#14
// const arr =  [5, 6, 7, 8, 9];
// const sum = arr.reduce((accum,item) => accum + item);
// console.log(sum);

//#15
// const arr =  [5, 6, 7, 8, 9];
// const pow = arr.map(item => item ** 2);
// console.log(pow);

//#16
// const arr =  [1, -3, 5, 6, -7, 8, 9, -11];
// function negative(arr) {
//     return arr.filter(item => item < 0);
// }
// console.log(negative(arr));

//#17
// const arr =  [1, -3, 5, 6, -7, 8, 9, -11];
// function even(arr) {
//     return arr.filter(item => item % 2 === 0);
// }
// console.log(even(arr));

//#18
// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// function leng(arr) {
//     return arr.filter(item => item.length > 5);
// }
// console.log(leng(arr));

//#19
// const arr = [1, 2, [3, 4], 5, [6, 7]];
// function subArray(arr) {
//     return arr.filter(Array.isArray);
// }
// console.log(subArray(arr));

//#20
// const arr = [5, -3, 6, -5, 0, -7, 8, 9];
// function numNegative(arr) {
//     return (arr.filter(item => item < 0)).length;
// }
// console.log(numNegative(arr));