const randomNumber = function() {
    const arr = [];

    return function() {

        for(let i = 0; arr.length < 100; i++) {
            let rNumb = Math.floor(Math.random() * 100) + 1;

            if(arr.indexOf(rNumb) > -1) continue;
            arr.push(rNumb);
        }

        return arr
    }
}();
  
console.log(randomNumber());