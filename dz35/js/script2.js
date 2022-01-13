(function () {
    
    const arr = [1, 2, 3];
    const arr2 = [1, 2, [1.1,1.2,1.3], 3];

    const generateList = function(array) {
        const listUl = document.createElement('ul');

        for(let i = 0; i < array.length; i++) {
            const appendLi = document.createElement('li');
            
            if(!Array.isArray(array[i])) {
                appendLi.innerText = array[i];

            } else {
                appendLi.appendChild(generateList(array[i]));
            }

            listUl.appendChild(appendLi); 
        
        }
        return listUl;
    }

    document.body.appendChild(generateList(arr));
    document.body.appendChild(generateList(arr2));

})();