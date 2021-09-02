"use strict";
function returnVoid(message) {
    console.log(message);
    return undefined; // undefined만 유일하게 작성할 수 있다
}
const r = returnVoid('리턴이 없다');
