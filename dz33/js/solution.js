const elemList = document.querySelectorAll('ul li');

function elemInArray(list) {
    const arr = [];

    for(let elem of list) {
        console.log(elem);
        arr.push(elem.innerHTML);
    }

    return arr;
}

console.log(elemInArray(elemList));


