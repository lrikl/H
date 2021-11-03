function checkArr(array) {
    if (array.length === 0) return 'ваш массив пуст';
    const exampleArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) continue;
        exampleArr.push(array[i]);
    }
    if (exampleArr.length === 0) return null;
    return exampleArr;
}
const arr = [ 1, 2, 3, -1, -2, -3];
console.log(checkArr(arr));