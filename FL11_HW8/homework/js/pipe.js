'use strict';

const addOne = a => a + 1;
function pipe(x) {
  let a = x;
  for (let i = 1; i < arguments.length; i++) {
    a = arguments[i](a);
  }
  return a;
}

pipe(1, addOne, addOne)