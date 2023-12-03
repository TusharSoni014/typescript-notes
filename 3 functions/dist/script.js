"use strict";
const add = (a, b) => {
    return a + b;
};
const mul = (a, b, c) => {
    if (typeof c === "undefined")
        return a * b;
    return a * b * c;
};
const mul2 = (a, b, c = 20) => {
    return a * b * c;
};
const anyFunc = (...a) => {
    const result = a.reduce((a, b) => a + b);
    return result;
};
console.log(anyFunc(1, 2, 3, 4, 5, 6, 7));
const anyfun2 = function (...a) {
    const result = a.reduce((a, b) => a + b);
    return result;
};
const getProduct = (product) => {
    console.log(product);
};
const getProduct2 = (product) => {
    console.log(product);
};
const product1 = {
    name: "samsung phone",
    stock: 2,
    price: 999,
    photo: "pic url",
    id: "123456789",
};
getProduct2(product1);
const errorHandler = () => {
    throw new Error("hehe, kaam nhi ho paya");
};
const activeTheme = "light";
