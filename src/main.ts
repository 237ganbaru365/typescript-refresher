// type aliases
type stringOrNumber = string | number;
type stringOrNumberArr = stringOrNumber[];

interface Guitarist {
  name?: string;
  active: boolean;
  album: stringOrNumberArr;
}

// literal types
let myName: "Fumina";
let userName: "Fumina" | "Yoshimura" | 237;
// userName = "Kishanti";

type multipleNumFunc = (a: number, b: number) => number;

// interface multipleNumFunc {
//   (a: number, b: number): number;
// }

let sampleFunc: multipleNumFunc = function (c, d) {
  return c * d;
};

console.log(sampleFunc(2, 3));

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
};

const createErr = (errMsg: string) => {
  throw new Error(errMsg);
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// you can not leave just return with set type for return value
// use of the never type
const numberOrString = (val: number | string): string => {
  if (typeof val === "string") {
    return "string";
  } else if (isNumber(val)) {
    return "number";
  }
  return createErr("This should never happen!");
};
