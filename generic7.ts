interface IPerson {
    name: string
    age: number
}

const person9: IPerson = {
    name: "Mark",
    age: 22
}

// type Keys = keyof IPerson

// const keys: Keys = "name"
// 어떤 개체에 keyof를 붙히면 그 결과물이 type으로 나오는데
// 그 type은 key의 이름으로 된 문자열의 union type으로 만들어 진다.

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

getProp(person9, "name") // string
getProp(person9, "age") // age

function setProp<T, K extends keyof T>(
    obj: T,
    key: K,
    value: T[K]
): void {
    obj[key] = value
}

setProp(person9, "name", "Anna")