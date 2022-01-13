(function () {
    
    const list = document.getElementById('ulId');
    
    const nameInArray = function(x) {
        const arr = [];

        for (let i = 0; i < list.attributes.length; i++) {
            const attribut = list.attributes[i];
            arr.push(attribut.name);

        }
        return arr;
    }

    const valueInArray = function(x) {
        const arr = [];

        for (let i = 0; i < list.attributes.length; i++) {
            const attribut = list.attributes[i];
            arr.push(attribut.value);

        }
        return arr;
    }

    console.log(nameInArray(list));
    console.log(valueInArray(list));


    const elem = document.querySelector('ul');
    const myName = 'Ярослав';

    elem.lastElementChild.innerHTML = 'Привет меня зовут ' + myName;
    elem.firstElementChild.setAttribute('data-my-name', myName);
    elem.removeAttribute('data-dog-tail');

})();