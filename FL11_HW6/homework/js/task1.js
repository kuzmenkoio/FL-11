let a1 = parseInt(prompt('Put coordinate a1'), 10)
let a2 = parseInt(prompt('Put coordinate a2'), 10)
let b1 = parseInt(prompt('Put coordinate b1'), 10)
let b2 = parseInt(prompt('Put coordinate b2'), 10)
let c1 = parseInt(prompt('Put coordinate c1'), 10)
let c2 = parseInt(prompt('Put coordinate c2'), 10)

const divider = 2;

if ((a1 + b1) / divider === c1 && (a2 + b2) / divider === c2) {
    console.log(true);
} else {
    console.log(false);
}