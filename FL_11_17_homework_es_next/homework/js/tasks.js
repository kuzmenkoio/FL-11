const array = [1,2,3,4,56,789,8,76,5,241,5,356,567,2];

const maxElement = (arr) => {
    return Math.max(...arr)
}

console.log(maxElement(array));

// ---------------------------------

const array2 = [5,5,3];

const copyArray = (arr) => {
    return [...arr];
}

const copiedArr = copyArray(array2);
console.log(copiedArr);

console.log(copiedArr === array2);

// --------------------------------------

const addUniqueId = (obj) => {
    const newObj = Object.assign({}, obj);
    newObj.id = Symbol();
    return newObj;
}

const obj = {name: 123};
const obj1 = addUniqueId(obj);

console.log(obj === obj1);

// -----------------------------------------

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};

const regroupObject = (obj) => {
    let {id, age, university} = obj.details;
    const {firstName} = obj.name;
    const newObj = {university, user: {age, firstName, id}};
    return newObj;
}

const regroupedObj = regroupObject(oldObj);
console.log(regroupedObj);

// ---------------------------------------------

const arrayNums = [1,1,23,3,4,5,6,5,4,23,2,1,1,1,1,1];
const findUniqueElements = (arr) => {
    return Array.from(new Set(arr));
}

console.log(findUniqueElements(arrayNums));


// ------------------------------------------------

const phoneNumber = '0123456789';

const hideNumber = (num) => {
    return num.slice(-4).padStart(10, '*');
}

console.log(hideNumber(phoneNumber));

// ----------------------------------------------------

const required = () => {
    throw new Error(`Missing property`);
  };

const add = (a, b = required()) => {
    return a + b;
}

console.log(add(1, 364));

// --------------------------------------------------------

const URL = 'https://jsonplaceholder.typicode.com/users'

function getReps() {
    fetch(URL)
        .then(response => response.json())
        .then(data => data.map((item) => {
            console.log(item.name);
        }))
}

getReps();

// -----------------------------------------------------------

async function getReps1() {
    let response = await fetch(URL);
    let repsList = await response.json();
    let usersLog = await repsList.map((item) => {
        console.log(item.name);
    });
}

getReps1();