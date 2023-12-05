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
