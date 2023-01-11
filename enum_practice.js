"use strict";
// enum :------------------An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. 
var days;
(function (days) {
    days["mon"] = "monday";
    days["tue"] = "tuesday";
    // wed,
    // thu,
    // fri,
    // sat,
    // sun
})(days || (days = {}));
let whichday;
whichday = days.tue;
console.log(whichday);
