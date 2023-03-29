"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
// can't use these anger bracket in react
let d = "world";
let e = "world";
// use case of assertion
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string;
10; // NOT RECCOMMEND
// The DOM (good reason to have assertions)
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
// img.src;
// myImg.src;
// nextImg.src;
const curYear = new Date().getFullYear().toString();
const yearEl = document.getElementById("year");
yearEl.innerHTML = curYear;
