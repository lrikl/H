function counter(numb = 0) {
    let count = numb;

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
  
let res = new counter();
let res2 = new counter();

console.log(res.increase());
console.log(res.increase());
console.log(res.decrease());
console.log(res.value());


console.log(res2.increase()); 
console.log(res2.increase()); 
console.log(res2.value()); 