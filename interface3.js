"use strict";
function hello3(person) {
    console.log(`안녕 ${person.name}이야.`);
}
const p31 = {
    name: "Mark",
    age: 39
};
const p32 = {
    name: "Anna",
    systers: ["Sung", "Chan"]
};
const p33 = {
    name: "Bokdaengi",
    father: p31,
    mother: p32
};
hello3(p33);
