"use strict";
// const aNumber: number = maybe // unknown은 number에 바로 할당할 수 없는 형태이다.
if (maybe === true) {
    const aBoolean = maybe;
    // const aString: string = maybe 에러가 생기는 이유는 이 if문 안에 들어있는 maybe는 true이기 때문이다
}
if (typeof maybe === 'string') {
    const aString = maybe;
    // const aBoolean:boolean = maybe 에러가 생기는 이유는 이 if문 안에 들어있는 maybe는 string이기 때문이다
}
