"use strict";
// class
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
// instance
const Fumina = new Coder("Fumina", "Rock", 28);
console.log(Fumina.getAge());
// console.log(Fumina.age);
// console.log(Fumina.lang); // even TS complain like this, JS compile
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Classic", 43);
console.log(Sara.getLang());
