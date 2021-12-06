// #1 indexOf()--------------------------------------------------

const arr1 = ['a', 'b', 'c', 'd', 'e', 'a'];
function indOf(arr, item, from = 0) {
    if(from < -arr.length) from = -arr.length; // чтобы не было смещения в отрицательные значения больше чем длина массива
    if(from >= 0) {
        for(let i = from; i < arr.length; i++) {
            if(item === arr[i]) return i;
        }

    } else if(from < 0) {
        for(let i = arr.length - Math.abs(from); i < arr.length; i++) {
            if(item === arr[i]) return i;
        }
    }

    return -1;
}
console.log(indOf(arr1, 'c', -6));
console.log(arr1.indexOf('c', -6));


// #2 lastIndexOf()--------------------------------------------------

const arr2 = ['a', 'b', 'c', 'd', 'e', 'a'];
function lastIndOf(arr, item, from = arr.length-1) {
    if(from > arr.length) from = arr.length;
    if(from >= 0) {
        for(let i = from; i >= 0; i--) {
            if(item === arr[i]) return i;
        }

    } else if(from < 0) {
        for(let i = arr.length - Math.abs(from); i >= 0; i--) {
            if(item === arr[i]) return i;
        }
    }

    return -1;
}
console.log(lastIndOf(arr2, 'b', -3));
console.log(arr2.lastIndexOf('b', -3));


// #3 find()--------------------------------------------------

const arr3 = ["app", "apple", "orange", "foo"];
function fd(arr,cb) {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) return arr[i];
    }

    return undefined;
}
console.log(fd(arr3, el => el.length > 3 ));
console.log(arr3.find( el => el.length > 3 ));

// find с параметром thisArg ---------------------------

const arr4 = ["app", "apple", "foo", "orange"];
function fd(arr, cb, thisArg) {
    for (let i = 0; i < arr.length; i++) {
        if (cb.call(thisArg, arr[i], i)) return arr[i];
    }
    return undefined;
}
console.log(fd(arr4,(el, arg) => el.length >= 5 && arg === 1));
console.log(arr4.find((el, arg) => el.length >= 5 && arg === 1));


// #4 findIndex()--------------------------------------------------

const arr5 = ["a", "80", 75, "foo"];
function fdIndx(arr,cb) {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) return i;
    }

    return -1;
}
console.log(fdIndx(arr5, el => typeof el !== "string" ));
console.log(arr5.findIndex( el => typeof el !== "string" ));


// #5 includes()--------------------------------------------------

const arr6 = ['a', 'b', 'c', 'd', 'e', 'a'];
function includ(arr, item, from = 0) {
    if(from < -arr.length) from = -arr.length;
    if(from >= 0) {
        for(let i = from; i < arr.length; i++) {
            if(item === arr[i]) return true;
        }

    } else if(from < 0) {
        for(let i = arr.length - Math.abs(from); i < arr.length; i++) {
            if(item === arr[i]) return true;
        }
    }

    return false;
}
console.log(includ(arr6, 'e', 2));
console.log(arr6.includes('e', 2));


// #6 every()--------------------------------------------------

const arr7 = [12, 14, 8, 130, 44];
function eve(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        if(!cb(arr[i])) return false;
    }

    return true;
}
console.log(eve(arr7, el => el >= 10));
console.log(arr7.every(el => el >= 10));


// #7 some()--------------------------------------------------

const arr8 = ['a', 'b', 18, 'c', 'd'];
let sm = function(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) return true;
    }
    return false;
};

console.log(sm(arr8, el => typeof el === "number"));
console.log(arr8.some(el => typeof el === "number"));

// some с параметром thisArg ---------------------------

const arr9 = ['a', 'b', 18, 'c', 'd'];
function sm2(arr, cb, thisArg) {
    for (let i = 0; i < arr.length; i++) {
        if (cb.call(thisArg, arr[i], i)) return true;
    }

    return false;
}
console.log(sm2(arr9,(el, arg) => typeof el !== "string" && arg === 2));
console.log(arr9.some((el, arg) => typeof el !== "string" && arg === 2));
