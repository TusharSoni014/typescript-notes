"use strict";
const para = document.querySelector(".para");
const typePara1 = document.querySelector(".para");
const typePara2 = document.querySelector(".para");
const typePara3 = document.querySelector(".paras");
const imgElement = document.querySelector("#img-element");
imgElement.src = "123465789";
const form = document.querySelector(".my-form");
const searchBox = document.querySelector(".my-form .search-input");
const historyContainer = document.querySelector(".history");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(searchBox.value) + 20;
    const element = document.createElement("p");
    element.innerHTML = String(value);
    historyContainer.appendChild(element);
};
const person1 = {
    name: "Boboy",
    age: 20,
    gender: true,
    height: 50,
};
function getAge() {
    return person1.age;
}
function getName() {
    return person1.name;
}
const person2 = {
    name: "tush",
    gender: "male",
};
function getData2(key) {
    return person2[key];
}
console.log(getData2("name"));
console.log(getData2("lol"));
const tushar = {
    age: 21,
    name: "tushar",
    followers: 50000,
    email: "tushar@gmail.com",
};
const getDetailsOptions = (key) => {
    return tushar[key];
};
getDetailsOptions("age");
const getDetailsWithKeys = (key) => {
    return tushar[key];
};
getDetailsWithKeys("age");
let key = "name";
console.log(tushar[key]);
console.log(tushar[key]);
