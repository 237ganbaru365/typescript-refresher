type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

// can't use these anger bracket in react
let d = <One>"world";
let e = <string | number>"world";

// use case of assertion
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }

  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string;
10 as unknown as string; // NOT RECCOMMEND

// The DOM (good reason to have assertions)
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

// img.src;
// myImg.src;
// nextImg.src;

const curYear = new Date().getFullYear().toString();
const yearEl = document.getElementById("year")!;

yearEl.innerHTML = curYear;
