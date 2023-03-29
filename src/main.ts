let strArr = ["a", "b", "c"];

let mixArr = [1, 2, "3", true];

mixArr[0] = "hello";

let myObj: object;
myObj = [];
console.log(typeof myObj);

type Sample = {
  name: string;
  active?: boolean;
  album: (string | number)[];
};

let evh: Sample = {
  name: "Fumina",
  active: false,
  album: [1, 2, "a"],
};

let func = (evh: Sample) => {
  return `Hello, ${evh.name}!`;
};

console.log(func(evh));

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
