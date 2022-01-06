(function() {
    'use strict'

    const data = JSON.parse(localStorage.getItem('form')); 

    function dataInList(obj) {

        if(!obj) throw new Error('No data')

        for(const i in obj) {

            const appendIt = document.createElement('li');
            appendIt.innerHTML = `${i}: ${obj[i]}`;

            const ul = document.getElementById('list');
            ul.appendChild(appendIt); 
        }
    }
    
    dataInList(data);

})();