function helloString(message: string): string {
    return message
}

function helloNumber(message: number): number {
    return message
}

// 이런식으로 어떤 함수가 들어오는 인자가 나가는 리턴타입이 일정한 규칙을 이루면서
// 같은 로직을 반복하는 함수가 있다.
// 이런 문제점을 해결하기 위해서 모든 타입을 다 받을 수 있는 인자를 설정하고
// 모든 타입을 다 리턴할 수 있는 리턴타입을 설정한다.
// 이럴때 쓰이는게 Any인데 Any를 사용하게 되면 우리 의도와는 다르게 다른 결과를 가져온다.

function hello0(message: any): any {
    return message
}

console.log(hello0("Lim").length)
console.log(hello0(22).length)

function helloGeneric<T>(message: T): T {
    return message
}

console.log(helloGeneric("Mark").length)
console.log(helloGeneric(22))
console.log(helloGeneric(true))
