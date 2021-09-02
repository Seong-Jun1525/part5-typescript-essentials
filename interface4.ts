interface Person4 {
    name: string
    age?: number
    hello(): void
}

const p41: Person4 = {
    name: 'Mark',
    age: 39,
    hello: function (): void {
        console.log(`안녕 ${this.name}이야.`)
    }
}

const p42: Person4 = {
    name: 'Mark',
    age: 39,
    hello(): void {
        console.log(`안녕 ${this.name}이야.`)
    }
}

// const p42: Person4 = {
//     name: 'Mark',
//     age: 39,
//     hello(this: Person4): void {
//         console.log(`안녕 ${this.name}이야.`)
//     }
// }

// const p43: Person4 = {
//     name: "Mark",
//     age: 39,
//     hello: (): void = > {
//         console.log(`안녕 ${this.name}이야.`) // this가 없기 때문에 global this를 가리켜서 error가 생긴다.
//     }
// }

p41.hello()
p42.hello()