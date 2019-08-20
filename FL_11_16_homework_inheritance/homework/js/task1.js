'use strict'

function assign(target, ...sources) {

    for (let i = 0; i < sources.length; i++) {        

        let source = sources[i];

        for (let key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
}

const defaults = {
    a: 123,
    b: 777
};
const options = {
    a: 456
};
const configs = assign({}, defaults, options); // => {a: 456, b: 777}
