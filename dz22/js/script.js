function counter(count = 0) {

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
  
const res = counter();
const res2 = counter();

console.log(res.increase());
console.log(res.increase());
console.log(res.decrease());
console.log(res.value());


console.log(res2.increase()); 
console.log(res2.increase()); 
console.log(res2.value()); 