function create(proto) {
    let newObj = {};
    newObj.__proto__ = proto;
    return newObj;
}

const obj1 = {
    prop: 5
};
const obj2 = create(obj1);

Object.getPrototypeOf(obj2) === obj1; // => true
obj2.prop; // => 5