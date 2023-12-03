"use strict";
class Player {
    constructor(height, weight, age) {
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
    getHeight() {
        console.log(this.height);
    }
}
const player1 = new Player(169, 65, 19);
player1.weight;
player1.getHeight();
class SportsPlayer {
    constructor(height, weight, age) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.getHeight = () => this.height;
    }
}
const newPlayer = new SportsPlayer(169, 69, 21);
newPlayer.weight;
newPlayer;
class Athelete extends SportsPlayer {
    constructor(height, weight, age, special) {
        super(height, weight, age);
        this.special = special;
        this.special = special;
        this.id = String(Math.random() * 1000);
    }
}
const athelete1 = new Athelete(171, 69, 25, false);
athelete1.getHeight();
athelete1.id;
class Phone {
    constructor(company, display, battery) {
        this.company = company;
        this.display = display;
        this.battery = battery;
    }
    get getBattery() {
        return this.battery;
    }
    set changeBattery(value) {
        this.battery = value;
    }
}
const samsung = new Phone("samsung", "HD", 4000);
samsung.company;
samsung.getBattery;
samsung.changeBattery = 3500;
samsung.getBattery;
class EcomProduct {
    constructor(name, stock, price) {
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const macbook = new EcomProduct("Mackbook Pro", 129, 9999);
macbook.getId();
