// #1 indexOf()--------------------------------------------------

// const arr = ['a', 'b', 'c', 'd', 'e', 'a'];
// function indOf(arr, item, from = 0) {
//     if(from < -arr.length) from = -arr.length; // чтобы не было смещения в отрицательные значения больше чем длина массива
//     if(from >= 0) {
//         for(let i = from; i < arr.length; i++) {
//             if(item === arr[i]) return i;
//         }

//     } else if(from < 0) {
//         for(let i = arr.length - Math.abs(from); i < arr.length; i++) {
//             if(item === arr[i]) return i;
//         }
//     }

//     return -1;
// }
// console.log(indOf(arr, 'c', -6));
// console.log(arr.indexOf('c', -6));


// #2 lastIndexOf()--------------------------------------------------

// const arr = ['a', 'b', 'c', 'd', 'e', 'a'];
// function lastIndOf(arr, item, from = arr.length-1) {
//     if(from > arr.length) from = arr.length;
//     if(from >= 0) {
//         for(let i = from; i >= 0; i--) {
//             if(item === arr[i]) return i;
//         }

//     } else if(from < 0) {
//         for(let i = arr.length - Math.abs(from); i >= 0; i--) {
//             if(item === arr[i]) return i;
//         }
//     }

//     return -1;
// }
// console.log(lastIndOf(arr, 'b', -3));
// console.log(arr.lastIndexOf('b', -3));


// #3 find()--------------------------------------------------

// const arr = ["app", "apple", "orange", "foo"];
// function fd(arr,cb) {
//     for(let i = 0; i < arr.length; i++) {
//         if(cb(arr[i])) return arr[i];
//     }

//     return undefined;
// }
// console.log(fd(arr, el => el.length > 3 ));
// console.log(arr.find( el => el.length > 3 ));

// find с параметром thisArg ---------------------------

// const arr = ["app", "apple", "foo", "orange"];
// function fd(arr, cb, thisArg) {
//     for (let i = 0; i < arr.length; i++) {
//         if (cb.call(thisArg, arr[i], i)) return arr[i];
//     }
//     return undefined;
// }
// console.log(fd(arr,(el, arg) => el.length >= 5 && arg === 1));
// console.log(arr.find((el, arg) => el.length >= 5 && arg === 1));


// #4 findIndex()--------------------------------------------------

// const arr = ["a", "80", 75, "foo"];
// function fdIndx(arr,cb) {
//     for(let i = 0; i < arr.length; i++) {
//         if(cb(arr[i])) return i;
//     }

//     return -1;
// }
// console.log(fdIndx(arr, el => typeof el !== "string" ));
// console.log(arr.findIndex( el => typeof el !== "string" ));


// #5 includes()--------------------------------------------------

// const arr = ['a', 'b', 'c', 'd', 'e', 'a'];
// function includ(arr, item, from = 0) {
//     if(from < -arr.length) from = -arr.length;
//     if(from >= 0) {
//         for(let i = from; i < arr.length; i++) {
//             if(item === arr[i]) return true;
//         }

//     } else if(from < 0) {
//         for(let i = arr.length - Math.abs(from); i < arr.length; i++) {
//             if(item === arr[i]) return true;
//         }
//     }

//     return false;
// }
// console.log(includ(arr, 'e', 2));
// console.log(arr.includes('e', 2));


// #6 every()--------------------------------------------------

// const arr = [12, 14, 8, 130, 44];
// function eve(arr, cb) {
//     for(let i = 0; i < arr.length; i++) {
//         if(!cb(arr[i])) return false;
//     }

//     return true;
// }
// console.log(eve(arr, el => el >= 10));
// console.log(arr.every(el => el >= 10));


// #7 some()--------------------------------------------------

// const arr = ['a', 'b', 18, 'c', 'd'];
// let sm = function(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if(cb(arr[i])) return true;
//     }
//     return false;
// };

// console.log(sm(arr, el => typeof el === "number"));
// console.log(arr.some(el => typeof el === "number"));

// some с параметром thisArg ---------------------------

// const arr = ['a', 'b', 18, 'c', 'd'];
// function sm(arr, cb, thisArg) {
//     for (let i = 0; i < arr.length; i++) {
//         if (cb.call(thisArg, arr[i], i)) return true;
//     }

//     return false;
// }
// console.log(sm(arr,(el, arg) => typeof el !== "string" && arg === 2));
// console.log(arr.some((el, arg) => typeof el !== "string" && arg === 2));
