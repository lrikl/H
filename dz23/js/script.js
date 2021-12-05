const sum = function(x1 = 0) {
    return function(x2) {
      return  x1 += x2;
    }
}();


const result = sum(3);
console.log(result);

sum(4);
sum(8);

const lastResult = sum(11);
console.log(lastResult);
