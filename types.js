"use strict";
function addn(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addn(10, 10, 10, 10, 10));
