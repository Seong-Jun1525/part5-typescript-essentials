"use strict";
var myName = 'Mark';
myName = "Anna";
var fullName = "Bob Bobbington";
var age = 38;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// template string을 사용하지 않을 경우
// let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
// "I'll be " + (age + 1) + " years old next month."
