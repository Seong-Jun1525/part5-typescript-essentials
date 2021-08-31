"use strict";
// Person은 implements 키워드를 사용해서 interface를 class로 사용할 수 있다.
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕 ${this.name}이야.`);
    }
}
const person0 = new Person("Mark");
person0.hello();
