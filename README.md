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
```
```ts
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

```ts
let name = 'mark'
name.toString()
```
- literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.

```ts
true
'hello'
3.14
null
undefined
```

- 또는 래퍼 객체로 만들 수 있다.
```ts
new Boolean(false) // typeof new Boolean(false) : 'object'
new String('world') // typeof new String('world') : 'object'
new Number(42) // typeof new Number(42) : 'object'
```

### Type Casing
- TypeScript의 핵심 primitive types은 모두 소문자이다
- 잘못된 예
```ts
function reverse(s: String): String {
    return s.split("").reverse().join("")
}

reverse("hello world")
```
- 올바른 예
```ts
function reverse(s: string): string {
    return s.split("").reverse().join("")
}

reverse("hello world")
```

## boolean

- boolean.ts
```ts
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
```ts
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

```ts
let name: string = "mark"
name = 'anna'
```

### Template String
- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick(= ``) 기호에 둘러쌓여 있다
- 포함된 표현식은 \`${expr}\`와 같은 형태로 사용

```ts
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

```ts
console.log(Symbol('foo') === Symbol('foo')) // false
```

- 프리미티브 타입의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어 준다.
- 그래서 주로 접근을 제어하는데 쓰는 경우가 많았다.

```ts
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

```ts
// 이 변수들에 할당할 수 있는 것들은 거의 없다.
let u: undefined = undefined
let n: null = null
```

- 설정을 하지 않으면 undefined & null are subtypes of all other types.
- number에 null 또는 undefined를 할당할 수 있다는 의미이다.
- 하지만, 컴파일 옵션에서 \`--strictNullChecks\'사용하면, null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.
    - 이 경우, null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 한다.

```ts
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
```ts
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

```ts
let n: null = null

console.log(n) // null
console.log(typeof n) // object
```

### undefined in JavaScript
- 값을 할당하지 않은 변수는 undefined라는 값을 가진다.
- 무언가가 아예 준비가 안된 상태.
- object의 property가 없을 때도 undefined이다.
- **런타임에서 typeof 연산자를 이용해서 알아내면, undefined이다.**
```ts
let u: undefined = undefined

console.log(u) // undefined
console.log(typeof u) // undefined
```

## object
- "**primitive type이 아닌 것**"을 나타내고 싶을 때 사용하는 타입.
- non-primitive type : **not** number, string, boolean, bigint, symbol, null or undefined.
```ts
// create by object literal
const person1 = {name: 'Mark', age: 39}

// person1 is not "object" type.
// person1 is "{name: string, age: number}" type.

// create by Object.create
const person2 = Object.create({name: 'Mark', age: 39})
```

```ts
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

```ts
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

```ts
let list: number[] = [1, 2, 3]

// let list: Array<number> = [1, 2, 3]
// 아래와 같은 방법은 사용을 자제한다 이유는 jsx나 tsx에서 충돌날 가능성이 있다

let list: (number | string)[] = [1, 2, 3, "4"]

```

## Tuple
- Array는 항상 공통요소일 수 밖에 없는 요소들의 모임. <br />
- Tuple은 길이가 정해져 있고 앞뒤의 타입이 정확한 그리고 다를 수 있는 자료형이다

```ts
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

```ts
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
```ts
const d = looselyTyped.a.b.c.d // any는 개체를 통해서 전파된다
```

- **결국, 모든 편의는 타입 안전성을 잃는 대가로 온다는 것을 기억하자**
- **타입 안전성은 TypeScript를 사용하는 주요 동기 중 하나이며**<br />
  **필요하지 않은 경우에는 any를 사용하지 않도록 하자.**
```ts
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

```ts
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

```ts
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

```ts
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

```ts
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
```ts
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

### noImplicitAny 옵션을 켜면
```plaintext
타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론 중 'any'라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다.
```

- noImplicitAnt에 의한 방어
```ts
// error TS7006: Parameter 'a' implicitly has an 'any' type.

function f3(a) {
    return a * 38
}

// 사용자의 코드를 실행할 수 없다. 컴파일이 정상적으로 마무리 될수 있도록 수정해야 한다.
console.log(f3(10))
console.log(f3('Mark') + 5)
```

- number 타입으로 추로된 리턴 타입
```ts
// 매개 변수의 타입은 명시적으로 지정했다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number로 추론
function f3(a: number) {
    if(a > 0) {
        return a * 38
    }
}
// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했다.
// 해당 함수의 리턴타입은 number이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있다.
// 하지만 실제 undefined + 5가 실행되어 NaN이 출력된다.

console.log(f3(5) // 190
console.log(f3(-5) + 5)) // NaN 이유 : a가 양수일 경우에는 return이 되지만 그렇지 않은 경우 return이 되지 않는다. 즉 -5는 0보다 크지 않기 때문에 return이 안된다. 그래서 undefined이다. undefined + 5는 당연히 undefinded이다. 그래서 NaN이다. (f3(-5)는 number로 추론됨.)

// f3(-5)는 undefinded다 하지만 typescript에서는 number로 추론된다.
// 즉, typescript에서 undefinded는 number안에 포함된다는 것을 알 수 있다.
```

### (위와 같을 때)strictNumChecks 옵션을 켜면
```plaintext
모든 타입에 자동으로 포함되어 있는 'null'과 'undefined'를 제거해준다.
```

- number | undefined타입으로 추론된 리턴 타입
```ts
// 매개변수의 타입은 명시적으로 지정했다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number | undefined로 추론된다.

function f3(a: number) {
    if(a > 0) {
        return a * 38
    }
}

// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했다.
// 해당 함수의 리턴 타입은 number | undefined이기 때문에,
// 타입에 따르면 이어진 연산을 바로 할 수 없다.
// 컴파일 에러를 고쳐야하기 때문에 사용자와 작성자가 의논을 해야한다.

console.log(f3(5) // 190
console.log(f3(-5) + 5)) // error TS2532: Object is possibly 'undefined'.
```

- 명시적으로 리턴 타입을 지정해야할까?
```ts
// 매개변수 타입과 함수의 리턴 타입을 명시적으로 지정했다.
// 실제 함수 구현부의 리턴 타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러가 발생한다.

// error TS2366: Function lacks ending return statement and return type does not inc:
function f3(a: number): number {
    if(a > 0) {
        return a * 38
    }
}
```

### noImplicitReturns 옵션을 켜면
```plaintext
함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.
```

- 모든 코드에서 리턴을 직접해야한다.
```ts
// if가 아닌 경우 return 을 직접하지 않고 코드가 종료된다.

// error TS7030: Not all code paths return a value.
function f3(a: number) {
    if(a > 0) {
        return a * 38
    }
}
```

- 매개변수에 object가 들어오는 경우
```js
// JavaScript

function f4(a) {
    return `이름은 ${a.name}이고, 연령대는 ${`Math.floor(a.age / 10) * 10`}대 입니다.`
}

console.log(f4({name: 'Mark', age: 38})) // 이름은 Mark이고 연령대는 30대입니다.
console.log(f4('Mark')) // 이름은 undefined이고, 연령대는 NaN대 입니다.
```

- object literal type
```ts
function f4(a: {name: string; age: number}): string {
    return `이름은 ${a.name}이고, 연령대는 ${`Math.floor(a.age / 10) * 10`}대 입니다.`
}

console.log(f4({name: 'Mark', age: 38})) // 이름은 Mark이고 연령대는 30대입니다.
console.log(f4('Mark')) // error TS2345: Argument og type 'string' is not assignable to parameter of type '{ name: string; age: number;}'.
```

### 나만의 타입을 만드는 방법
```ts
interface PersonIneterface {
    name: string
    age: number
}

type PersonTypeAlias = {
    name: string
    age: number
}

function f5(a: PersonInterface): string {
    return `이름은 ${a.name}이고, 연령대는 ${`Math.floor(a.age / 10) * 10`}대 입니다.`
}

console.log(f5({name: 'Mark', age: 38}))
console.log(f5('Mark')) // error TS2345: Argument og type 'string' is not assignable to parameter of type '{ name: string; age: number;}'.
```

## Structural Type System vs Nominal Type System

- TypeScript는 Structural Type System을 따르고 있다.

### Structural Type System - 구조가 같으면, 같은 타입이다.

```ts
interface IPerson {
    name: string
    age: speak(): string
}

type PersonType = {
    name: string
    age: number
    speak(): string
}

let personInterface: IPerson = {} as any
let personType: PersonType = {} as any

personInterface = personType
personType = personInterface

```

### nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다.

```ts
type PersonID = string & { readonly brand: unique symbol }

function PersonID(id: string): PersonID {
    return id as PersonID
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-aaaaaa'))
getPersonById('id-aaaaaa') // error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonID'. Type 'string' is not assignable to type '{ readonly brand: unique symbol }'.
```

### duck typing
- 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다.
- **TypeScript는 duck typing이 아니다!**

## 타입 호환성
- 서브타입
```ts
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1: 1 = 1
let sup1: number = sub1
sub1 = sup1 // error! Type 'number' is not assignable to type '1'.

// sub2 타입은 sup2 타입의 서브 타입이다. 
let sub2: number[] = [1]
let sup2: object = sup2
sub2 = sup2 // error! Type '{}' is not missing the following properties from type 'number[]': length, pop, concat, and 16 more.

// sub3 타입은 sup3 타입의 서브 타입이다. 
let sub3: [number, number] = [1, 2]
let sub3: number[] = sub3
sub3 = sup3 // error! Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.

// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1
let sup4: any = sub4
sub4 = sup4

// sub5 타입은 sup5 타입의 서브 타입이다.
let sub5: never = 0 as never
let sup5: number = sub5
sub5 = sup5 // error! Type 'number' is not assignable to type 'never'.

class Animal {}
class Dog extends Animal {
    eat()
}

// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6: Dog = new Dog()
let sup6: Animal = sup6
sub6 = sup6 // error! Property 'eat' is missing in type 'SubAnimal' but required in type 'SubDog'.
```

### 1. 같거나 서브 타입인 경우, 할당이 가능 -> 공변
```ts
// primitive type
let sub7: string = ''
let sup7: string | number = sub7

// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: {a: string; b: number} = {a: '', b: 1}
let sup8: {a: string | number; b: number} = sub8

// array = object와 마찬가지
let sub9: Array<{a: string; b: number}> = [{a: '', b: 1}]
let sup9: Array<{a: string | number; b: number}> = sub9
```

### 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. -> 반병

```ts
class Peron {}
class Developer extends Person {
    coding() {}
}
class StartupDeveloper extends Developer {
    burning() {}
}

function tellme (f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer를 할당하는 경우
tellme (function dToD(d: Developer): Developer {
    return new Developer()
})

// Developer => Developer 에다가 Person => Developer를 할당하는 경우
tellme (function dToD(d: Person): Developer { // Person이 슈퍼타입인 경우
    return new Developer()
})

// Developer => Developer 에다가 StartupDeveloper => Developer를 할당하는 경우
tellme (function sToD(d: StartupDeveloper): Developer {
    return new Developer()
})
```

```plaintext
위의 코드는 strict 옵션을 제거한 형태로는 문제가 없다.
하지만 d: StartupDeveloper 이런 경우는 문제가 있다고 알려줘야하기 때문에
strickFunctionTypes 옵션을 켜서 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우, 에러를 통해 경고한다.
```

## 타입 별칭
- Interface랑 비슷해 보인다.
- Primitive, Union Type, Tuple, Function
- 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있다.
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아니다.

### Aliasing Primitive

```ts
type MyStringType = string

const str = 'world'

let myStr: MyStringType = 'hello'
myStr = str

// 별 의미가 없다.
```

### Aliasing Union Type

```ts
let person: string | number = 0
person = 'Mark'

type StringOrNumber = string | number

let another: StringOrNumber = 0
another = 'Anna'

// 1. 유니온 타입은 A도 가능하고 B도 가능한 타입.
// 2. 길게 쓰는걸 짧게 반복되는걸 줄여주는 역할도 함.

```

### Aliasing Tuple

```ts
let person: [string, number] = ['Mark', 35]

type PersonTuple = [string, number]

let another: PersonTuple = ['Anna', 24]

// 1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.
```

### Aliasing Function

```ts
type EatType = (food: string) => void
```

### Alias와 Interface의 차이점
- 어떤 타입이 그 타입으로서의 목적이나 존재가치가 명확하면 Interface를 사용
- 어떤 다른 대상을 그냥 가리킬 뿐이라던가 별명으로만 존재할 뿐이면 Alias를 사용 

# TypeScript Compiler

## Compilation Context
컴파일 컨텍스트는 기본적으로 TypeScript가 유효한 것과 그렇지 않은 것을 결정하기 위해 구문 분석하고 분석할 파일 그룹화에 대한 멋진 용어입니다. 어떤 파일에 대한 정보와 함께 컴파일 컨텍스트에는 사용 중인 컴파일러 옵션에 대한 정보가 포함됩니다. 이 논리적 그룹화를 정의하는 좋은 방법(프로젝트라는 용어도 사용하고 싶습니다)은 tsconfig.json 파일을 사용하는 것입니다.

- TS -> TypeScript Compiler(-> Compilation Context) -> JS

## tsconfig schema

최상위 프로퍼티
- compileOnSave
- extends
- compileOptions
- files
- include
- exclude
- references
- ~~typeAcquisition~~
- ~~tsNode~~

## compileOnSave
파일 변경 후 저장하면 바로 컴파일 해준다. 에디터마다 안될 수도 있다.

- true / false (default false)
- 최상단에 설정해야 한다.
- 누가 ??
    - Visual Studio 2015 with TypeScript 1.8.4 이상
    - <a href="https://github.com/TypeStrong/atom-typescript#compile-on-save">
        atom-typescript 플러그인
      </a>

- schema
```ts
{
    ...,
    "compileOnSaveDefinition": {
        "properties": {
            "compileOnSave": {
                "description": "Enable Compile-on-Save for this project.",
                "type": "boolean" 
            }
        }
    },
    ...,
}
```

## extends

- 보통 상속할때 사용한다.
- tsconfig파일도 다른 파일을 상속받고 그 안 무언가를 추가해서 사용하는 방법이 있다.
- 사용 예를 들면 , 클라이언트 타입스크립트와 서버사이드 타입스크립트가 있을 때, 설정이 비슷하다면 어떤 파일을 만든 후, 상속을 받아서 작은 부분만 바꿔서 쓰는 경우 사용 가능하다.
- 파일 (상대)결로명: string


- schema
```ts
{
    ...,
    "extendsDefinition": {
        "properties": {
            "extends": {
                "description": "Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.",
                "type": "string" 
            }
        }
    },
    ...,
}
```

- base.json
```json {
    {
    "compilerOptions": {
        "strict": true
    }
}
```

- tsconfig.json
```json
{
    "extends": "./base.json", // 추가한 부분
}
```

- test2.ts
```ts
const a: number = undefined 
```


```plaintext
tsconfig.json파일에 compilerOptions의 "strict": true부분을 주석 처리를 하면 strict옵션이 꺼진 상태다. 그런데 extends를 사용하여 base.json파일을 상속받게 되면 tsconfig.json파일의 "strict": true부분은 껐지만 base.json파일은 "strict": true부분이 켜져있으므로 켜진 상태가 된다. 그렇기 때문에 test2.ts파일의 a에 에러가 생긴다. 원래는 끄면 undefined를 넣어도 에러가 없지만 base.json파일을 상속받고 있기 때문에 에러가 생기는 거다. extends를 안하고 있으면 에러가 발생하지 않는다.
```


기본적으로 여러가지 형태의 증명된 설정파일들이 내려받는 방법.  
npm install -D @tsconfig/deno

```json
{
    "extends": "@tsconfig/deno/tsconfig.json",
    ...
}
```

## files, include, exclude
- 셋다 설정이 없으면, 전부다 컴파일
- files
    - 상대 혹은 절대 경로의 리스트 배열
    - exclude 보다 쎄다. (exclude가 해놓아도 files 에 있으면 컴파일     실행된다는 뜻)
    - 특정 폴더를 exclude가 있어도 컴파일 된다.

- exclude, include
    - string은 Glob Pattern이다.
    - Glob Pattern은 gitignore같은거 작성할 때 쓰는 Glob Pattern이다.
    - exclude
        - string으로 지정되어있는 어떤 문자열들을 컴파일할때 제외시켜버리는 역할을 함.
        - include property에 있는 것들은 영향을 주지만 files에는 영향을 주지 않음.
        - 설정하지 않으면 4가지(node_modules, bower_component, jspm_packages, \<outDir>\)를 default로 제외한다.
        - \<outDir>\은 항상 제외한다.(include에 있어도)
    - include
        - Glob Pattern에 의해 매치되는 files들을 컴파일에 포함시킨다.
        - files나 include에 있지 않으면 exclude에 있는 것만 빼고 모든 파일을 컴파일 한다.
        - exclude보다 약하다.
        - *같은걸 사용하면, .ts, .tsx / .d.ts만 include(allowJS)

## compileOptions - typeRoots, types
type이란 우리의 프로젝트에서 라이브러리같은 것을 사용했을 때 라이브러리에는 JS이기 때문에 Typing이 안되어있다. Typing이 안되어있는 JS 라이브러리를 사용할 경우에 Type을 지정해주는 역할을 하는 도구들이 필요한다. 애초에 이 도구들은 TS에서 관리하지 않았다. 그 전에는 서드파티를 이용해서 이 Type을 제공해주고 있었다.

예를 들어 우리의 프로젝트에서 React같은 외부라이브러리 사용하는 경우에 우리는 TS 프로젝트이지만 React는 JS 라이브러리이기 때문에 Typing이 되어 있지 않다. 그러면 문제가 생길 수 있다.

```ts
// react를 설치 후 ts파일에서 import했을 때
import React from "react" // error

// Could not find a declaration file for module 'react'. 'c:/Users/User/Desktop/MyStudy/Web-Programming/Fastcamp/Part5-TypeScript-Essentials/node_modules/react/index.js' implicitly has an 'any' type.
// 라이브러리는 설치 했으나 type 선언이 되어 있지 않다는 말.

// Try `npm i --save-dev @types/react` if it exists or add a new declaration (.d.ts) file containing `declare module 'react';`
// npm i -D @types/react 를 하라고 함.
```

```plaintext
@types 라는 이 부분이 TypeScript2.0 이상부터 새로 추가된 기능.
외부 JS라이브러리에 대한 예전에 Typing을 도와주는 서드파티로 사용했던 그런 type선언들을 각각의 패키지화 시켜서 그거을 tsconfig안에서 설정하고 사용할 수 있게 도와주는 그런 기능이다.
typeRoots와 types는 @types에 관한 그런 이야기다.
```

- 기본적으로 컴파일 옵션에 아무런 설정을 하지 않으면
    ```ts
    import React from "react"
    ```
    - 예를 들어 이렇게 react를 가져왔을 때 모듈이름이 "react"인데 @types/react이다. `./node_modules.@types/react/index.d.ts`를 찾아서 그거를 React에 type definition으로 사용한다.
    - 아무것도 설정을 하지 않았는데 이렇게 사용이 되는데 이게 default 설정이여서 이렇게 되는거다.
    - typeRoots와 types는 default 설정이 아니고 무언가 우리가 추가적으로 다른설정을 하면 좋은 그런 property이다. 
- typeRoots
    - 다른 폴더도 `./node_modules.@types` 이런식으로 지정해서 쓰고 싶다면 typeRoots를 사용해서 배열로 여러개를 등록해서 사용하면 된다. 즉, typeRoots를 사용하면 배열 안에 들어있는 경로들 아래서만 가져온다.
    - 유명하지 않은 모듈이나 내가 작성한 모듈은 이런것이 작성이 되어 있지 않기 때문에 이런 경우에는 또 다른 나만의 @types 지정해서 넣을 폴더를 만들고 그 폴더를 여기에 같이 지정해주면 사용이 가능하다.
    - 이럴 때 사용하는 것이 typeRoots이다. 
- types
    - 패키지의 경로가 아니고 패키지의 이름을 쓴다. 즉, 배열 안의 모듈 혹은 `./node_modules.@types` 안의 모듈 이름에서 찾아온다.
    - [] 빈 배열을 넣는다는건 이 시스템을 사용하지 않겠다는 것이다.
- typeRoots와 types를 같이 사용하지 않는다.

## target과 lib
- **target**은 어떤 런타임에서 실행하는지 결정해주는 역할을 한다.  
- 어디선가 우리의 코드를 실행하기로 결정을 했다면 작성하는 코드는 실행 환경에 맞게 type definition이 되어 있어야한다. 예를 들면 브라우저에서 실행하려고 하는데 윈도우 전역개체를 definition으로 지정되어 있지 않다면 문제가 될 수 있다. 즉, 내가 최종적으로 실행하고자 하는 환경에 맞게 기본타입들을 정의함으로써 문제가 없도록 사전에 예방을 해주는 것이 **lib**이다.

### target
- 빌드의 결과물을 어떤 버전으로 할 것이냐를 결정
- 지정을 안하면 es3이다.
- test4.ts
```ts
const hello = () => { }
```
- tsconfig.json의 target
```json
{
    "compilerOptions": {
        ...,
        "target": "es5",
        ...,
    }
}
```
- 터미널에서 npx tsc를 실행 후 test4.js의 코드
```js
"use strict";
var hello = function () { };
```
- tsconfig.json의 target을 es6로 바꾼 후 test4.js
```js
"use strict";
const hello = () => { };
```

### lib
- 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐를 결정
- lib를 지정하지 않았을 때
    - target이 'es3'이고, default로 lib.d.ts를 사용
    - target이 'es5'이고, default로 dom, es5, scripthost를 사용
    - target이 'es6'이고, default로 dom, es6, dom.iterable, scripthost를 사용
- lib를 지정하면 그 lib 배열로만 라이브러리를 사용한다.
    - 빈 [] => 'no definition found 어쩌구' error 뜸

## outDir, outFile, rootDir
- outFile
    - 일종의 번들러같은 형태로 지원
    - 일반적인 형태로는 하나의 파일로는 떨굴 수 없다.
    - 모듈이 시스템 혹은 amd와 같은 형태로 지원이 되야지만 하나의 파일로 만들어 줄 수 있다.
    - 파일을 다 모아서 하나의 컴파일된 하나의 파일로 모으고 싶을 때 outFile을 사용
- outDir
    - 우리가 컴파일 하고자 하는 root, 어떤 영역을 대상으로 그대로 outDir로 지정된 특정 폴더에 계층을 똑같이 맞춰서 생성됨.
    - 자주 쓰임. 보통 컴파일된 결과물을 모아놓은 폴더를 outDir로 지정한 다음에 컴파일 하면 편하게 사용 가능.
    - 소스디렉토리에 그대로 똑같이 구조를 컴파일된 상태로 옮길 때 outDir 를 사용
- rootDir
    - 내 소스 폴더를 특정 Dir로 지정할 수 있는데 예를 들면 src라는 폴더를 하나 만들어서 rootDir로 지정하고 그 rootDir을 그대로 계층으로 가져가서 outDir로 컴파일하는 그런 결과물을 가져올 때 rootDir을 사용함.
    - 사용을 안하게 되면 file이나 files나 include, exclude에 의해서 가장 상위에 어떤 영역을 잡고 그 영역 그대로 컴파일된 결과물로 계층을 맞춰서 가져가게 됨.

```plaintext
프로젝트 안에 src라는 폴더를 만들고 그안에 test.ts를 생성한 후 tsconfig.json파일에 rootDir을 src로 지정하고 outDir을 dist로 지정한 다음 npx tsc를 하면 dist라는 폴더가 생기고 그안에 바로 test.js가 생긴다.

하지만 dist 폴더를 삭제하고 프로젝트 안에 hello.ts를 만들고 rootDir을 주석처리하고 다시 npx tsc를 하면 dist 폴더 안에 src폴더와 hello.js가 생기고 src폴더 그 안에 test.js가 있다. 

즉, rootDir에 따라서 결과물이 달라진다. rootDir을 지정하지 않은 상태에서는 전체 프로젝트에서 ts파일에 가장 상단을 컴파일 하려고 하기 때문에 그 상단에 의해서 폴더의 계층이 생긴다. 
```

## strict
- strict를 true로 설정해야하는게 기본이다.
- 엄격하게 타입을 확인하는 옵션을 활성화 한다.
    - --noImplicitAny
    - --noImplicitThis
    - --strictNullChecks
    - --strictFunctionTypes
    - --strictPropertyInitialization
    - --strictBindCallApply
    - --alwaysStrict

### --noImplicitAny
명시적이지 않게 any타입을 사용하여, 표현식과 선언에 사용하면, 에러를 발생.
```ts
// noImplicitAny
function noImplicitAnyTestFunc(arg) {
    console.log(arg)
}
// error : Parameter 'arg' implicitly has an 'any' type.
```
- TS가 추론을 실패한 경우, any가 맞으면 any라고 지정하자.
- 아무것도 쓰지 않으면, 에러를 발생.
- 이 오류를 해결하려면, any라고 지정되어 있지 않은 경우는 any가 아닌 것이다. (타입 추론이 되었으므로)

- suppressImplicitAnyIndexErrors옵션
    - noImplicitAny 사용할 때, 인덱스 객체에 인덱스 signature가 없는 경우 오류가 발생하는데 이를 예외처리 한다.
    ```ts
    var obj = {
        bar: 10
    }

    obj['foo'] = 10 // error: Index signature of object type implicitly has an 'any' type.
    obj['bar'] = 10 // Okay
    obj.bar = 10
    ```
    - obj['foo']로 사용할 때, 인덱스 객체라 판단하여, 타입에 인덱스 시그니처가 없는 경우, 에러를 발생시킨다.
    - 이때 suppressImplicitAnyIndexErrors옵션을 사용하면, 이런 경우 예외로 간주하여 에러를 발생시키지 않는다.

### --noImplicitThis
명시적이지 않게 any 타입을 사용하여, this 표현식에 사용하면, 에러를 발생.

```ts
// noImplicitThis
function noImplicitThisTestFunc(name: string, age: number) {
    this.name = name // error
    this.age = age // error

    return this // error
    // 'this' implicitly has type 'any' because it does not have a type annotation.
}

console.log(noImplicitThisTestFunc.call({height: 160}, 'Mark', 36))
console.log(noImplicitThisTestFunc.apply({height: 170}, ['Mark', 36]))
console.log(noImplicitThisTestFunc.bind({height: 180})('Mark', 36))
```

```ts
// noImplicitThis
function noImplicitThisTestFunc(this, name: string, age: number) { // this에 error
    this.name = name
    this.age = age

    return this
}
```
- 첫번째 매개변수 자리에 this를 놓고, this에 대한 타입을 어떤 것이라도 표현하지 않으면, noImplicitAny가 오류를 발생시킨다.
- JS에서는 매개변수에 this를 넣으면, 이미 예약된 키워드라 SyntaxError를 발생시킨다.
- call / apply / bind와 같이 this를 대체하여 함수 콜을 하는 용도로도 쓰인다.
- 그래서 this를 any로 명시적으로 지정하는 것은 합리적이다. ( 물론 구체적인 사용처가 있는 경우 타입을 표현하기도 함. )
- 그럼에도 불구하고 this를 최대한 제한을 해주는게 타입적으로 조금 더 안전하게 처리 될 수 있다.

```ts
// noImplicitThis 2
class NoImplicitThisTestClass {
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    public print(this: NoImplicitThisTestClass) {
        console.log(this._name, this._age)
    }
}

new NoImplicitThisTestClass('Mark', 36).print()
```
- Class 에서는 this를 사용하면서, noImplicitThis와 관련한 에러가 나지 않는다. (당연 이유는 public print() 이부분에 타이핑을 안하더라도 자동으로 class가 그 자리에 오게 된다.)
- Class 에서 constructor를 제외한 멤버 함수의 첫번째 매개변수도 일반함수와 마찬가지로 this를 사용할 수 없다.

### --strictNullChecks
- strictNullChecks 모드에서는, null 및 undefined 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나, any일 경우에만 할당이 가능하다.
- 한 가지 예외는 undefined에 void 할당 가능

```ts
// strictNullChecks
const a: number = null // error
const b: string = undefined // error
const c: number | null = null
const d: any = null
const e: any = undefined
const f: void = undefined
```
- strictNullChecks를 적용하지 않으면,
    - 모든 타입은 null, undefined 값을 가질 수 있다.
    - string으로 타입을 지정해도, null 혹은 undefined 값을 할당할 수 있다.
- strictNullChecks를 적용하면,
    - 모든 타입은 null, undefined 값을 가질 수 없고, 가지려면 union type을 이용해서 직접 명시해야 함.
    - any타입은 null과 undefined를 가진다. 예외적으로 void 타입의 경우 undefined를 가진다.
- strictNullChecks를 적용하지 않고, 어떤 값이 null과 undefined를 가진다는 것은 암묵적으로 인정하고 계속 사용하다 보면, 정확히 어떤 타입이 오는지를 개발자 스스로가 간과할 수 있다.
- 정말로 null과 undefined를 가질 수 있는 경우, 해당 값을 조건부로 제외하고 사용하는 것이 좋다.
- 이 옵션을 켜고 사용하는 경우, 사용하려는 함수를 선언할 때부터 매개변수와 리턴 값에 정확한 타입을 지정하는 노력을 기울여야 하고, 기울이게 될 것이다.

### --strictFunctionTypes
함수 타입에 대한 bivariant 매개변수 검사를 비활성화 한다.<br />
<h3><a href="https://www.stephanboyer.com/post/132/what-are-covariance-and-contravariance">참고자료</a></h3>

```plaintext
(Animal -> Greyhound) <: (Dog -> Dog)
```
- 반환 타입은 공변적(covariant)
- 인자 타입은 반공변적(contravariant)
- 그런데 타입스트크립트에서 인자 타입은 공변적이면서, 반공변적인게 문제!
- 이 문제를 해결하는 옵션이 strictFunctionTypes
- 옵션을 켜면, 에러가 안나던걸 에러나게 함.

```ts
const button = document.querySelector('#id') as HTMLButtonElement

button.addEventListener('keydown', (e:MouseEvent) => {})
```
이전에는 위와 같은 코드도 에러를 발생시키지 않았지만, 옵션을 켜면 에러가 발생하게 됨.

### --strictPropertyInitialization
정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인한다.
이 옵션을 사용하려면 --strictNullChecks를 사용하도록 설정해야 한다.

```ts
// strictPropertyInitialization
class Person {
    private _name: string // error
    private _age: number // error

    // [ts] Property '_age' has no initializer and is not definitely assigned in the constructor.

    constructor() {}

    public print() {
        console.log(this._name, this._age)
    }
}
```

constructor에서 초기 값을 할당한 경우 => 정상
```ts
// strictPropertyInitialization
class Person {
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    public print() {
        console.log(this._name, this._age)
    }
}
```

constructor에서 안하는 경우
- 보통 다른 함수로 이니셜라이즈 하는 경우 (async 함수)
- constructor에서 async를 사용할 수 없다.

```ts
// strictPropertyInitialization
class Person {
    private _name!: string // !를 붙이는 이유 : 이 변수는 개발자가 어디선가 할당을 시킬 것이니 에러를 무시해달라는 의미
    private _age!: number 

    public async initialize(name: string, age: number) {
        this._name = name
        this._age = age
    }

    public print() {
        console.log(this._name, this._age)
    }
}
```


### --strictBindCallApply
bind, call, apply 에 대한 더 엄격한 검사 수행
- Function의 내장 함수인 bind / call / apply를 사용할 때, 엄격하게 체크하도록 하는 옵션이다.
- bind는 해당 함수안에서 사용할 this와 인자를 설정해주는 역할을 하고, call과 apply는 this와 인자를 설정한 후, 실행까지 한다.
- call과 apply는 인자를 설정하는 방식에서 차이점이 있다.
    - call은 함수의 인자를 **여러 인자의 나열로** 넣어서 사용하고, apply는 **모든 인자를 배열 하나로** 넣어서 사용한다.

### --alwaysStrict
각 소스 파일에 대해 JS의 strick mode로 코드를 분석하고, "엄격하게 사용"을 해제한다.

```ts
// alwaysStrict
var e1 = 015 // error
var e2 = { p: 1, p: 2 } // error
var e3
delete e3 // error

// [ts] An object literal cannot have multiple properties with the same name in strict mode.
```
<h3><a href="https://developer.mozilla.org/ko/docs/web/JavaScript/Reference/Strict_mode">참고자료</a></h3>
syntax error가 ts error로 나온다.

컴파일된 JS파일에 "use strict"가 추가 됨.
