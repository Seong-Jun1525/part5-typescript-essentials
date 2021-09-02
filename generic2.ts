// function helloBasic<T>(message: T): T {
//     return message
// }

// helloBasic<string>("Lim")
// helloBasic(22)

function helloBasic<T, U>(message: T, comment:U): T {
    return message
}

helloBasic<string, number>("Lim", 22)
helloBasic(22, 20)