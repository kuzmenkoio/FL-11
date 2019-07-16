const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]  

// 0. Write function, which returns array of numbers from string parameter.

function getNumbers(string) {
    let ten = 10;
    let arrFromString = string.split('');
    let arrFromNumber = [];

    for (let index = 0; index < arrFromString.length; index++) {
        if (arrFromString[index] >= 0 && arrFromString[index] < ten) {
            arrFromNumber.push(arrFromString[index]);
        }

    }

    return arrFromNumber;

}

getNumbers('n1um3ber95');

// 1. Write a function that could receive different amount of parameters (n1, n2, ...n) that have different data types (string, number, boolean, etc.) and returns an object where keys are data types of received parameters and value are their count.

let obj = {
    string: 0,
    object: 0,
    'undefined': 0,
    number: 0,
    symbol: 0
};

function findTypes(...args) {
    for (let i = 0; i < arguments.length; i++) {
        switch (typeof args[i]) {
            case 'number':
                obj.number += 1;
                break;
            case 'string':
                obj.string += 1;
                break;
            case 'object':
                obj.object += 1;
                break;
            case 'undefined':
                obj[undefined] += 1;
                break;
            case 'symbol':
                obj.symbol += 1;
                break;
            default:
                break;
        }
    }

    for (const key in obj) {
    
        if (obj[key] === 0) {
            delete obj[key];
        }
    }

    return obj;

}

// 2. Write function, which iterates over array and executes function on each element.

function executeforEach(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        f(arr[i]);
    }
}

// 3. Write function, which returns transformed array based on function, which passed as a parameter. Reuse function from task 2.

function mapArray(arr, f) {
    let newArr = [];
    executeforEach(arr, el => newArr.push(f(el)))

    return newArr;
}

// 4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.

function filterArray(arr, f) {
    let newArr = [];
    executeforEach(arr, function (el) {
        if (f(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}

// 5. Write function, which returns formatted date.

function showFormattedDate(date) {
    const months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `Date: ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}

showFormattedDate(new Date('2019-01-27T01:10:00'))

// 6. Write function, which returns Boolean value, is received string parameter can be converted to valid date.

function canConvertToDate(date) {
    return !!Date.parse(date);
}

canConvertToDate('2016-13-18T00:00:00') // false
canConvertToDate('2016-03-18T00:00:00') // true

// 7. Write function, which returns difference between two dates in days

function daysBetween(date1, date2) {
    const milliseconds = 1000;
    const seconds = 60;
    const minutes = 60;
    const hours = 24;
    return Math.round((date2 - date1) / (milliseconds * seconds * minutes * hours));
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')) // 32

// 8. Write function, which returns amount of people, who are over 18. Reuse function from task 4,7

function getAmountOfAdultPeople(data) {
    const ages = [];
    const days = 365.26;
    const minAge = 18;
    for (let i = 0; i < data.length; i++) {
        ages.push(Math.floor(daysBetween(new Date(data[i]['birthday']), new Date()) / days));
    }
    let result = filterArray(ages, function (el) {
        return el > minAge;
    });
    return result.length;
}

getAmountOfAdultPeople(data)

// 9. Write function, which returns array of keys of an object.

function keys(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3})

// 10. Write function, which returns array of values of an object.

function values(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3})
