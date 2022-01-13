(function () {
    
    const generateTab = function() {

        const table = document.createElement('table'); 
        
            for(let i = 0; i < 10; i++) {
                const tr = document.createElement('tr');

                for(let j = 1; j <= 10; j++){
                    const td = document.createElement('td');
                    
                    td.innerText = i * 10 + j;
                    tr.appendChild(td); 
                }

                table.appendChild(tr);
            
            }
            
        return table;
    }

    document.body.appendChild(generateTab()); 

})();