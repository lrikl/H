function insertWordInto(string) {
  const arr = string.split(' ');
  let useIndx = [];
  
  return function(addStr) {
    if (useIndx.length === arr.length + 1) useIndx = [];

    const randomPosition = randomIndex(arr.length, useIndx);
   
    if (arr.includes(addStr)) {
      arr.splice(arr.indexOf(addStr), 1);
    }
    arr.splice(randomPosition, 0, addStr);

    if (!useIndx.includes(randomPosition)) {
      useIndx.push(randomPosition);
    }

    let newString = arr.join(' ');
    arr.splice(randomPosition, 1);

    return newString;
  };
}

function randomIndex(leng, useIndx) {
  const randomPosition = Math.floor(Math.random() * (leng + 1));

  if (useIndx.includes(randomPosition)) {
    return randomIndex(leng, useIndx);
  }
  
  return randomPosition;
}

const result = insertWordInto('hello world');
console.log(result('Odesa'));
console.log(result('Odesa'));
console.log(result('Odesa'));
console.log('-------------');
console.log(result('Odesa'));


