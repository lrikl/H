const array1 = [ 1, [2, 3], 4, [[3, 5]], [[4, 5, 6]], [[10, 11, 12]], 55, 105, [[[75]]] ];
const array2 = [1, 2, 3];

function flatn(arr) {
  if(arguments.length > 1) throw new Error('Function accepts only 1 argument, too much arguments provided');
  let arrResult = [];

  for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        arrResult = arrResult.concat(flatn(arr[i]));
      } else {
        arrResult.push(arr[i]);
      }
  }
  
  return arrResult;
}


console.log(flatn(array1));
console.log(flatn(array2));



