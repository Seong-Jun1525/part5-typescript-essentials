"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
any1.toString();
let looselyTyped = {};
const d = looselyTyped.a.b.c.d; // any는 개체를 통해서 전파된다
function leakingAny(obj) {
    // const a = obj.num <- any
    // const b = a + 1 <- any
    // return b <- any
    const a = obj.num; // 누수를 막는 방법
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
// c.indexOf("0")
