const sum = function() {
    let x1 = 0;
    return function(x2) {
      return  x1 += x2
    }
}();


const result = sum(1) 
console.log(result) // -> 1

const secondResult = sum(2)
console.log(secondResult) // -> 3

sum(4)
sum(8)
const lastResult = sum(11)
console.log(lastResult) // -> 26
