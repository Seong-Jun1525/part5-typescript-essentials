interface IPerson1 {
    name: string,
    age?: number,
    hello(): void
}
// Person은 implements 키워드를 사용해서 interface를 class로 사용할 수 있다.
class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    constructor(name: string) {
        this.name = name
    }
    hello(): void {
        console.log(`안녕 ${this.name}이야.`)
    }
}

const person0: IPerson1 = new Person("Mark")
person0.hello()