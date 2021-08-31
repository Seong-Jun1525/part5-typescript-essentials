interface Person3 {
    name: string
    age?: number
    [index: string]: any// a['index'] <- 이거랑 같은 의미
}

function hello3(person: Person3): void {
    console.log(`안녕 ${person.name}이야.`)
}

const p31: Person3 = {
    name: "Mark",
    age: 39
}

const p32: Person3 = {
    name: "Anna",
    systers: ["Sung", "Chan"]
}

const p33: Person3 = {
    name: "Bokdaengi",
    father: p31,
    mother: p32
}

hello3(p33)