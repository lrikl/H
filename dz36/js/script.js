(function() {
    'use strict'

    const forms = {
        formId: 'form',
        
        events() {
            const form = document.getElementById(this.formId);
            this.form = form;

            this.form.addEventListener('submit', this.handler.bind(this));
        },

        handler() {
            const inputs = this.form.querySelectorAll('input, select, textarea');
            const data = {};
           
            for(let i of inputs) {
                if(i.value === '') continue;
                data[i.name] = i.value;
            }

            if(Object.keys(data).length !== 0){
                this.formToLocal(data);
            }
        },

        formToLocal(data) {
            localStorage.setItem(this.formId, JSON.stringify(data));
        }
    }

    forms.events();

})();
