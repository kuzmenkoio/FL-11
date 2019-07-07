let a = parseInt(prompt('What is the first triangle side length?'), 10);
let b = parseInt(prompt('What is the second triangle side length?'), 10);
let c = parseInt(prompt('What is the third triangle side length?'), 10);
if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
    if (a === b && b === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}