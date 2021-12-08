function consider (count = 0) {

  return {
    increase() {
      return count++;
    },
    decrease() {
      return count--;
    },
    value() {
      return count;
    }
  }
}
  
const result = consider();
const result2 = consider();

console.log(result.increase());
console.log(result.increase());
console.log(result.decrease());
console.log(result.value());

console.log(result2.increase()); 
console.log(result2.increase()); 
console.log(result2.value());

// с помощью конструктора new 
console.log('--------------------------------------------');

function Counter(count = 0) {

  this.increase = function() {
    return count++;
  }

  this.decrease = function() {
    return count--;
  }

  this.value = function() {
    return count;
  }
}
  
const res = new Counter();
const res2 = new Counter();

console.log(res.increase());
console.log(res.increase());
console.log(res.decrease());
console.log(res.value());

console.log(res2.increase()); 
console.log(res2.increase()); 
console.log(res2.value()); 

