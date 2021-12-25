const elemList = document.querySelectorAll('ul li');
const elemInArray = [];

for (let elem of elemList) {
    console.log(elem);
    elemInArray.push(elem.innerHTML);
}

console.log(`общее кол-во элементов: ${elemList.length}`);
console.log(elemInArray);


