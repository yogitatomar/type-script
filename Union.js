"use strict";
// Union | (OR) :------------------------
// Union types are used when a value can be more than a single type.
// Using the | we are saying our parameter is a string or number:
let data = true;
console.log(data);
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');
function combine(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(20, 30));
console.log(combine("yogita", "anmol"));
