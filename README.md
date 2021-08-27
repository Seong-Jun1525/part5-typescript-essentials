# Basic Types

## TypeScript Types vs JavaScript Types

기본적으로 TypeScript는 **Static Types**이다. 개발하는 중간에 Type을 체크한다. <br />
JavaScript는 **Dynamic Types**이다. 개발할 때는 알 수 가 없고 런타임 될 때 알 수 있다.<br />

```js
// Javascript
function add(n1, n2) {
    if(typeof n1 != 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!')
    }
    return n1 + n2
}

const result = add(39, 28)

// TypeScript
function add(n1: number, n2: number) {
    return n1 + n2
}

const result = add(39, 28)
```
```plaintext
프로그램이 유용하려면, 가장 간단한 데이터 단위로 작업할 수 있어야한다. numbers, strings, structures, boolean 값 등등. TypeScript에서, 우리는 JavaScript에서 기대하는 것과 동일한 타입을 지원하며, 돕기 위해 추가적인 열거 타입이 제공되었다.
```
- TypeScript에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
- **사용자가 만든 데이터 타입은 결국은 이 기본 자료형들로 쪼개진다**
- JavaScript 기본 자료형을 포함(superset)
    - **ECMAScript 표준에 따른 기본 자료형은 6가지**
        - Boolean
        - Number
        - String
        - Null
        - Undefined
        - Symbol (ECMAScript 6에 추가)
        - Array: Object 형
- **프로그래밍을 도울 몇가지 타입이 더 제공된다**
    - Any, Void, Never, Unknown
    - Enum
    - Tuple: Object형

## Primitive Type
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형이다.
- 프리미티브 형의 내장함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분이다.
- (ES2015 기준) 6가지
    - boolean
    - number
    - string
    - symbol
    - null
    - undefined

```js
let name = 'mark'
name.toString()
```
- literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.

```js
true
'hello'
3.14
null
undefined
```

- 또는 래퍼 객체로 만들 수 있다.
```js
new Boolean(false) // typeof new Boolean(false) : 'object'
new String('world') // typeof new String('world') : 'object'
new Number(42) // typeof new Number(42) : 'object'
```

### Type Casing
- TypeScript의 핵심 primitive types은 모두 소문자이다
- 잘못된 예
```js
function reverse(s: String): String {
    return s.split("").reverse().join("")
}

reverse("hello world")
```
- 올바른 예
```js
function reverse(s: string): string {
    return s.split("").reverse().join("")
}

reverse("hello world")
```

## boolean

- boolean.ts
```js
let isDone: boolean = false

isDone = true
console.log(typeof isDone) // boolean

let isOk: Boolean = true
// let isNotOk: boolean = new Boolean(true)
```

## number
- JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점 값 이다.
- TypeScript는 16진수 및 10 진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수를 지원한다.
- NaN
- 1_000_000과 같은 표기 가능

- number.ts
```js
let decimal: number = 6 // 10진수 리터럴

let hex: number = 0xf00d // 16진수 리터럴

let binary: number = 0b1010 // 2진수 리터럴

let octal: number = 0o7444 // 8진수 리터럴

let notANumber: number = NaN

let underscoreNum_number = 1_000_000
```

## string
- 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 **string** 형식을 사용한다.
- JavaScript와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해 ""나, ''를 사용한다.

```js
let name: string = "mark"
name = 'anna'
```

### Template String
- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick(= ``) 기호에 둘러쌓여 있다
- 포함된 표현식은 \`${expr}\`와 같은 형태로 사용

```js
let fullName: string = `Bob Bobbington`
let age: number = 38

let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`

// template string을 사용하지 않을 경우
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
"I'll be " + (age + 1) + " years old next month."

console.log(sentence)
```

## Symbol & symbol
- ECMAScript 2015의 Symbol이다.
- new Symbol로 사용할 수 없다.
- 함수로 사용할 때는 Symbol, 타입으로 사용할 때는 symbol이다

```js
console.log(Symbol('foo') === Symbol('foo')) // false
```

- 프리미티브 타입의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어 준다.
- 그래서 주로 접근을 제어하는데 쓰는 경우가 많았다.

```js
console.log(Symbol('foo') === Symbol('foo'))

const sym = Symbol()

const obj = {
    [sym]: "value"
}

obj[sym]
```

## Undefined & Null
- TypeScript에서, undefined와 null은 실제로 각각 undefined 및 null이라는 타입을 가진다.
- void 와 마찬가지로, 그 자체로는 그다지 유용하지는 않다.
- 둘다 소문자로만 존재한다.

```js
// 이 변수들에 할당할 수 있는 것들은 거의 없다.
let u: undefined = undefined
let n: null = null
```

- 설정을 하지 않으면 undefined & null are subtypes of all other types.
- number에 null 또는 undefined를 할당할 수 있다는 의미이다.
- 하지만, 컴파일 옵션에서 \`--strictNullChecks\'사용하면, null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.
    - 이 경우, null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 한다.

```js
let name: string = null
let age: number = undefined

// strictNullChecks => true
// Type 'null' is not assignable to type 'string'.
let name: string = null // (X)

// null => null || void, undefined => undefined || void
// Type 'null' is not assignable to type 'undefined'.
let u: undefined = null // (X)

let v: void = undefined // (O)

let union: string | null | undefined = 'str'
```

- null.ts
```js
// let MyName: number = undefined

// let u: undefined = null 

let v: void = undefined // 오로지 undefined만 올 수 있다

let union: string | null = null

union = "Mark"
```

### null in JavaScript
- null이라는 값으로 할당된 것을 null이라고 한다.
- 무언가가 있는데, 사용할 준비가 덜 된 상태.
- null이라는 타입은 null이라는 값만 가질 수 있다.
- **런타임에서 typeof 연산자를 이용해서 알아내면, object이다.**

```js
let n: null = null

console.log(n) // null
console.log(typeof n) // object
```

### undefined in JavaScript
- 값을 할당하지 않은 변수는 undefined라는 값을 가진다.
- 무언가가 아예 준비가 안된 상태.
- object의 property가 없을 때도 undefined이다.
- **런타임에서 typeof 연산자를 이용해서 알아내면, undefined이다.**
```js
let u: undefined = undefined

console.log(u) // undefined
console.log(typeof u) // undefined
```

## object
- "**primitive type이 아닌 것**"을 나타내고 싶을 때 사용하는 타입.
- non-primitive type : **not** number, string, boolean, bigint, symbol, null or undefined.
```js
// create by object literal
const person1 = {name: 'Mark', age: 39}

// person1 is not "object" type.
// person1 is "{name: string, age: number}" type.

// create by Object.create
const person2 = Object.create({name: 'Mark', age: 39})
```

```js
let obj: object = {} // 이런걸({}) 넣지만 보통 이런식으로 사용하지 않는다

obj = {name: 'Mark'}

obj = [{name: 'Mark'}]

obj = 39 // Error

obj = 'Mark' // Error

obj = true // Error

obj = 100n // Error  bigint

obj = Symbol() // Error
 
obj = null // Error

obj = undefined // Error
```

```js
declare function create(o: object | null): void

create({prop : 0})

create(null)

create(42) // Error

create("string") // Error

create(false) // Error

create(undefined) // Error

// Object.create
Object.create(0) // Error
```

## Array
- 자바스크립트에서 array는 객체다
- 사용방법
    - Array<타입>
    - 타입[]

```js
let list: number[] = [1, 2, 3]

// let list: Array<number> = [1, 2, 3]
// 아래와 같은 방법은 사용을 자제한다 이유는 jsx나 tsx에서 충돌날 가능성이 있다

let list: (number | string)[] = [1, 2, 3, "4"]

```

## Tuple
- Array는 항상 공통요소일 수 밖에 없는 요소들의 모임. <br />
- Tuple은 길이가 정해져 있고 앞뒤의 타입이 정확한 그리고 다를 수 있는 자료형이다

```js
let x: [string, number]

x = ["hello", 39]

// x = [10, "hello"] error

// x[3] = "world" error

const person: [string, number] = ["Mark", 37]
const [first, second] = person

// const [first, second, third] = person     error
```

## any
- any는 어떤 것이나 된다는 의미의 타입.
- 이 의미는 정말로 어떤 것이나 들어올 수도 있는 경우가 있고 그게 아닐 수도 있다.
- any를 최대한 쓰지 않는게 핵심이다.
- 왜냐면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문이다.
- 그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다.
    - noImplicitAny

```js
function returnAny(message): any { // 오류
    console.log(message)
}

const any1 = returnAny("리턴은 아무거나")

any1.toString()

function returnAny(message: any): any { // 정상
    console.log(message)
}

const any1 = returnAny("리턴은 아무거나")

any1.toString() 
```

- **any는 계속해서 개체를 통해 전파된다.**
```js
const d = looselyTyped.a.b.c.d // any는 개체를 통해서 전파된다
```

- **결국, 모든 편의는 타입 안전성을 잃는 대가로 온다는 것을 기억하자**
- **타입 안전성은 TypeScript를 사용하는 주요 동기 중 하나이며**<br />
  **필요하지 않은 경우에는 any를 사용하지 않도록 하자.**
```js
function leakingAny(obj: any) {
    // const a = obj.num <- any
    // const b = a + 1 <- any
    // return b <- any

    const a:number = obj.num // 누수를 막는 방법
    const b = a + 1
    return b
}

const c = leakingAny({num: 0})
// c.indexOf("0")
```

## unknown
- any가 가지고 있는 어떤 타입에 불안정한 요소를 주는 그런 부분을 조금이나마 해소를 하고자 나온 대체자.
- 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있다.
- 이러한 값은 동적컨텐츠 (예: 사용자로부터, 또는 우리의 API의 모든 값을 의도적으로 수락하기를 원할 수 있다.)
- 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown타입을 제공한다.

```js
declare const maybe: unknown

// const aNumber: number = maybe // unknown은 number에 바로 할당할 수 없는 형태이다.

if (maybe === true) {
    const aBoolean:boolean = maybe

    // const aString: string = maybe 에러가 생기는 이유는 이 if문 안에 들어있는 maybe는 true이기 때문이다
}

if (typeof maybe === 'string') {
    const aString: string = maybe

    // const aBoolean:boolean = maybe 에러가 생기는 이유는 이 if문 안에 들어있는 maybe는 string이기 때문이다
}
```

- TypeScript 3.0 버전부터 지원
- any와 짝으로 any보다 Type-safe한 타입
    - any와 같이 아무거나 할당할 수 있다.
    - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
    - 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고, 사용할 수 없다.
- unknown타입을 사용하면 runtime error를 줄일 수 있을 것 같다.
    - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.


## never
- 일반적으로 return에 사용된다.

```js
function error(message:string): never {
    throw new Error(message)
}

function fail() {
    return error("failed")
}

function infiniteLoop(): never {
    while(true) { }
}
```

- never 타입은 모든 타입의 subtype 이며, 모든 타입에 할당할 수 있다.
- 하지만 never에는 그 어떤 것도 할당할 수 없다.
- any조차도 never에게 할당 할 수 없다.
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.

```js
// let a: string = "hello"

declare const a: string | number

if (typeof a !== 'string') {
    a
}

type Indexable<T> = T extends string ? T & { [index: string]: any }: never
type ObjectIndexable = Indexable<{}>
```

## void
- 어떤 타입도 가지지 않는 빈 상태

```js
function returnVoid(message: string): void {
    console.log(message)

    return undefined // undefined만 유일하게 작성할 수 있다
}

const r = returnVoid('리턴이 없다')

```

# Type System
## 작성자와 사용자의 관점으로 코드 바라보기
- 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
- 컴파일러가 자동으로 타입을 추론하는 시스템
- 타입스크립트의 타입 시스템
    - 타입을 명시적으로 지정할 수 있다.
    - 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 추론

```plaintext
자신의 코드에서 해당 함수를 사용하는 사용자 - 형태를 정해둔 함수 - 해당 함수를 구현하는 구현자
```

- 타입이란 해당 변수가 할 수 있는 일을 결정한다.

```js
// JavaScript

// f1 이라는 함수의 body 에서는 a를 사용할 것 이다.
// a가 할 수 있는 일은 a의 타입이 결정한다

function f1(a) {
    return a
}
```

- 함수 사용법에 대한 오해를 야기하는 자바스크립트
```js
// JavaScript

// (f2 실행의 결과가 NaN을 의도한 것이 아니라면)
// 이 함수의 작성자는 매개변수 a가 number 타입이라는 가정으로 함수를 작성했다

function f2(a) {
    return a * 38
}

// 사용자는 사용법을 숙지하지 않은 채, 문자열을 사용하여 함수를 실행했다.
console.log(f2(10)) // 380
console.log(f2('Mark')) // NaN
```
- 타입스크립트의 추론에 의지하는 경우
```js
// 타입스크립트 코드지만,
// a의 타입을 명시적으로 지정하지 않은 경우이기 때문에 a는 any로 추론
// 함수의 리턴 타입은 number로 추론 (NaN도 number의 하나이다.)
function f3(a) {
    return a * 38
}

// 사용자는 a가 any이기 때문에, 사용법에 맞게 문자열을 사용하여 함수를 실행했다

console.log(f3(10))
console.log(f3('Mark') + 5) // NaN
```







