// рекурсия

const randomNumber = function() {
    const arr = [];
    function gen() {
    
        if(arr.length === 100) return arr;
        
        const rNumb = Math.floor(Math.random() * 100) + 1;

        if(arr.indexOf(rNumb) === -1) arr.push(rNumb);
        return gen();  

    }
    return gen;
}();

console.log(randomNumber());


// бесконечный цикл ----------------------------------------------

const random = function() {
    const arr = []
    return function() {
    
        while(true) {
            
            if(arr.length === 100) return arr;
            
            const rNumb = Math.floor(Math.random() * 100) + 1;

            if(arr.indexOf(rNumb) === -1) arr.push(rNumb);  
        }
    }
}();

console.log(random());





