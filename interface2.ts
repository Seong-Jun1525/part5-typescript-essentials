interface Person2 {
    name: string,
    age?: number
    // ?를 작성하면 의도적으로 어떤 개체에 프로퍼티가 있을 수도 있고 없을 수도 있는 경우에 사용
}

function hello2(person: Person2): void {
    console.log(`안녕 ${person.name}이야.`)
}

hello2({name: "Mark", age: 39})
hello2({name: "Anna"})