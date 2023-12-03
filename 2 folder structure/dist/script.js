"use strict";
let a;
let str = "Bello";
let check;
str.toLowerCase();
let b = ["awfaw", 123, true, { str: 123 }];
let z = 123;
let c = "awfawfwaf";
let surname;
surname = "";
surname = 1123;
let surname2 = "huehuehue";
const add = (a, b) => {
    console.log(a + b);
    return a + b;
};
const subs = (a, b) => {
    console.log(a - b);
    return Number(String(a - b));
};
const subs2 = (a, b) => {
    console.log(a - b);
    return a - b;
};
const mult = (a, b) => {
    return a * b;
};
const array = [1, 2, 3, 4, 5, 6, 7];
const array2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const array3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const array4 = ["a", "b", "c", 1, 2, 3];
const newArr = [1, 2, 3];
const imagePost1 = {
    width: 512,
    height: 768,
    prompt: "a car",
    seed: 123456789,
};
const imagePost2 = {
    width: 512,
    height: 768,
    prompt: "a car",
};
const imagePost3 = {
    width: 512,
    height: 768,
    prompt: "",
    seed: 1238411681451351,
};
const text1 = {
    title: "first note",
    description: "lorem ipsum dollar me amet in pret incididunt et justo euismod tempor inc ante ipsum dolor sit am",
    hash: 1234,
};
const text2 = {
    owner: "tushar",
    title: "second note",
    description: "lorem ipsum dollar me amet in pret inc",
    hash: 1234,
    function: (a, b) => a + b,
};
console.log(text2?.function(10, 20));
