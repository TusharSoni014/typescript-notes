//-------------------------------------------------------//
//----------------------CLASSES--------------------------//
//-------------------------------------------------------//
class Player {
  private height;
  weight;
  public age; //default is public, so na likhe toh bhi chalega

  constructor(height: number, weight: number, age: number) {
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
//player1.height will give problem if height is private
player1.getHeight();

//----------------------SHORTER SYNTAX FOR TYPESCRIPT CLASSES------------------------//

class SportsPlayer {
  constructor(
    private height: number,
    public weight: number,
    protected age?: number
  ) {}
  getHeight = () => this.height;
}

const newPlayer = new SportsPlayer(169, 69, 21);
newPlayer.weight;
newPlayer;
//only weight property and getheight function can be accessed

class Athelete extends SportsPlayer {
  public readonly id: string; //public read only property
  constructor(
    height: number,
    weight: number,
    age: number,
    public special: boolean
  ) {
    super(height, weight, age);
    this.special = special;
    this.id = String(Math.random() * 1000);
  }
}

const athelete1 = new Athelete(171, 69, 25, false);
athelete1.getHeight();
athelete1.id;

//----------------------GETTER AND SETTER FUNCTIONS------------------------//
class Phone {
  constructor(
    public company: string,
    public display: string,
    private battery: number
  ) {}
  get getBattery(): number {
    return this.battery;
  }

  set changeBattery(value: number) {
    this.battery = value;
  }
}

const samsung = new Phone("samsung", "HD", 4000);
samsung.company;

samsung.getBattery;
//getter functions me function ki tarah call nhi krna hota, property ki tarah access kr skte hai

samsung.changeBattery = 3500;
samsung.getBattery; //will return 3500

//----------------------INTERFACES WITH CLASSES------------------------//
interface Product {
  name: string;
  stock: number;
  price: number;
  offer?: boolean;
}

interface NewProduct {
  getId: () => string;
}

//applies both class properties
class EcomProduct implements Product, NewProduct {
  private id: string = String(Math.random() * 1000);
  constructor(
    public name: string,
    public stock: number,
    public price: number
  ) {}
  getId = () => this.id;
}

const macbook = new EcomProduct("Mackbook Pro", 129, 9999);
macbook.getId(); //returns id
