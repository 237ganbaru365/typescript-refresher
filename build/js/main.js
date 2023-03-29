"use strict";
// literal types
let myName;
let userName;
// interface multipleNumFunc {
//   (a: number, b: number): number;
// }
let sampleFunc = function (c, d) {
    return c * d;
};
console.log(sampleFunc(2, 3));
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const createErr = (errMsg) => {
    throw new Error(errMsg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// you can not leave just return with set type for return value
// use of the never type
const numberOrString = (val) => {
    if (typeof val === "string") {
        return "string";
    }
    else if (isNumber(val)) {
        return "number";
    }
    return createErr("This should never happen!");
};
