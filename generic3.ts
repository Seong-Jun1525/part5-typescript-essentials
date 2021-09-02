function helloArray<T>(message: T[]) {
    return message[0]
}

helloArray(["hello", "world"]) // string
helloArray(["hello", 5]) // string | number

function helloTuple<T,K>(message: [T, K]): T {
    return message[0]
}

helloTuple(["hello", "world"]) // string
helloTuple(["hello", 5]) // string 