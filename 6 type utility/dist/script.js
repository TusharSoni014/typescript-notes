"use strict";
const user1 = {};
const user2 = {
    email: "email@gmail.com",
    name: "name",
};
const user3 = {
    email: "email@gmail.com",
    name: "name",
};
const user4 = {
    email: "email@gmail.com",
    name: "name",
};
const user5 = {
    email: "email@gmail.com",
    name: "name",
};
const groupUsers = {
    "person 1": { age: 12 },
    "person 2": { age: 12 },
    "person 3": { age: 12 },
    "person 4": { age: 12 },
};
const orderLocation = {
    country: "india",
    state: "rajasthan",
    status: "pending",
};
const orderLocations = {
    name: "product 1",
    phoneNumber: 123456789,
    product: "macbook",
};
const addition = (a, b) => {
    console.log(a + b);
};
class Person {
    constructor(name, age, rollnumber) {
        this.name = name;
        this.age = age;
        this.rollnumber = rollnumber;
    }
}
