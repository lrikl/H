(function () {
    
    const list = document.getElementById('ulId');
    
    const arrVal = [];
    const arrName = [];

    for(const attr of list.attributes) {
        arrVal.push(attr.value);
        arrName.push(attr.name);
    }

    console.log(arrVal);
    console.log(arrName);


    const elem = document.querySelector('ul');
    const myName = 'Ярослав';

    elem.lastElementChild.innerHTML = 'Привет меня зовут ' + myName;
    elem.firstElementChild.setAttribute('data-my-name', myName);
    elem.removeAttribute('data-dog-tail');

})();