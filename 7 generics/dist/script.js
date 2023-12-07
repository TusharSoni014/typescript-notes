"use strict";
const func = (a) => {
    return a;
};
const result1 = func(10);
const result2 = func("str");
const result3 = func(true);
result1.toFixed(2);
result2.split("");
result3.valueOf();
const func2 = (a) => {
    return a;
};
const person1 = {
    age: 21,
    name: "tushar",
};
const result4 = func(person1);
result4.name;
result4.age;
const result5 = func(person1);
const array1 = ["a", "b", "c", "d", "e"];
const func3 = (a, b) => {
    return { a, b };
};
const func4 = (a, b) => {
    return { a, b };
};
const value = func3(20, "hie");
console.log(value);
value.a;
value.b;
const func5 = (a, b) => {
    return { a, b };
};
const value2 = func5(12, 15);
const insaan1 = {
    age: 20,
    name: "hero",
};
const insaan2 = {
    age: 21,
    email: "email@hero.com",
    name: "heroooo",
};
const func6 = (a, b) => {
    return { a, b };
};
const value3 = func6(insaan1, insaan2);
const users = [
    {
        age: 20,
        name: "insaan 1",
    },
    {
        age: 21,
        name: "insaan 2",
    },
    {
        age: 22,
        name: "insaan 3",
    },
    {
        age: 23,
        name: "insaan 4",
    },
    {
        age: 24,
        name: "insaan 5",
    },
    {
        age: 25,
        name: "insaan 6",
    },
];
const filterPeople = (arr, property, value) => {
    return arr.filter((element) => element[property] === value);
};
const filteredPeopleByName = filterPeople(users, "name", "insaan 3");
const filteredPeopleByAge = filterPeople(users, "age", 24);
console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);
