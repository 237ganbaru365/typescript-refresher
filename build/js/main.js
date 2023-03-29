"use strict";
let strArr = ["a", "b", "c"];
let mixArr = [1, 2, "3", true];
mixArr[0] = "hello";
let myObj;
myObj = [];
console.log(typeof myObj);
let evh = {
    name: "Fumina",
    active: false,
    album: [1, 2, "a"],
};
let func = (evh) => {
    return `Hello, ${evh.name}!`;
};
console.log(func(evh));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
