"use strict";
function apierror(msg, code) {
    throw { message: msg, code: code };
}
console.log(apierror("some internet syntex err", 500));
