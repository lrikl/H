const obj = {
  firstName: 'Yaroslav',
  phone: '+312401294',
}

function foo(age) {
  console.log(`name: ${this.firstName}, age: ${age} years, phone: ${this.phone}`)
}

function  metodBind(func, context, ...rest) {
  return function(...arg) {
    const newKeyObj = 'newKeyContext';
    context[newKeyObj] = func;

    const result = context[newKeyObj](...rest.concat(arg));
    delete context[newKeyObj];

    return result;

  }
}


metodBind(foo, obj)('10');
metodBind(foo, obj, '10')();
console.log(obj);