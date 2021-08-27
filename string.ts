let myName: string = 'Mark'

myName = "Anna"

let fullName: string = `Bob Bobbington`
let age: number = 38

let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`

console.log(sentence)

// template string을 사용하지 않을 경우
// let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
// "I'll be " + (age + 1) + " years old next month."