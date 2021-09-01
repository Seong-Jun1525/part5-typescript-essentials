"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
class Child extends Parent {
    constructor(age) {
        // super를 먼저 호출하지 않으면 에러가 발생
        super('Mark Jr.', age);
        this.gender = "male";
        this.printName();
    }
}
const u = new Child(1);
u.print();
