(function () {
    
    const generateTab = function(row, cells) {

        const table = document.createElement('table'); 
        
            for(let i = 0; i < row; i++) {
                const tr = document.createElement('tr');

                for(let j = 1; j <= cells; j++){
                    const td = document.createElement('td');
                    
                    td.innerText = i * cells + j;
                    tr.appendChild(td); 
                }

                table.appendChild(tr);
            
            }
        return table;
    }

    document.body.appendChild(generateTab(10, 10)); 

})();