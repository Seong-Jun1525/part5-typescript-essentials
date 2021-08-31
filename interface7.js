"use strict";
// error
// - 원래 HelloPerson의 age는 있을 수도 있고 없을 수도 있는데
// age: number로 작성하면 무조건 있는걸로 해석해서 error가 생긴다.
// const helloPerson: HelloPerson = function (name: string, age: number) {
//     console.log(`안녕 ${name} 이야.`)
// }
const helloPerson = function (name) {
    console.log(`안녕 ${name} 이야.`);
};
helloPerson("Mark", 39);
