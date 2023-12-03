//tsc -init (initialize the typescript compiler)
//tsc -w (after setting up the typescript compiler)

//------------------------------------------------------//
//------------define the types of variables-------------//
//------------------------------------------------------//

let a: number;
let str: string = "Bello";
let check: boolean;

//declaring variable types, ca activate intellisense to show related suggestions after the dot, for example,
// "a. " will show number methods
// "str. " will show string methods
// "check. " will show boolean methods

str.toLowerCase();

//----------------another method of declaring types------------------//
let b = ["awfaw", 123, true, { str: <number>123 }];
let z = <number>123;
let c = <string>"awfawfwaf";

//----------------declaring types with union------------------//
let surname: string | number;
surname = "";
surname = 1123;

//with brackets
let surname2 = <string | number>"huehuehue";

//----------------declaring functions------------------//

const add = (a: number, b: number) => {
  console.log(a + b);
  return a + b;
};

//brackets ke baad result ka type of value declare kr diya h
const subs = (a: number, b: number): number => {
  console.log(a - b);
  return Number(String(a - b));
  //string pr chor denge toh error hoga, and wapis number convert kr diya toh no problem
};

const subs2 = (a: number, b: number): number => {
  console.log(a - b);
  return a - b;
  //string pr chor denge toh error hoga, and wapis number convert kr diya toh no problem
};

//------------------------------------------------------//
//---------------------TYPE ALIASES---------------------//
//------------------------------------------------------//

type Username = string | number;
type AnyFunction = (a: number, b: number) => number;
// do inout lega and return me number type dega result me

//function ke name ke baad hi type alias lga diya hmne
const mult: AnyFunction = (a, b) => {
  return a * b;
};

//------------------------------------------------------//
//---------------------ARRAY TYPES----------------------//
//------------------------------------------------------//

const array: number[] = [1, 2, 3, 4, 5, 6, 7];
const array2: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const array3: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const array4: Array<string | number> = ["a", "b", "c", 1, 2, 3];

//---------------------TUPLE----------------------//
//fixed size arrays
const newArr: [number, number, number] = [1, 2, 3];

//------------------------------------------------------//
//---------------------OBJECT TYPES---------------------//
//------------------------------------------------------//

//use type while defining
type Image = {
  width: number;
  height: number;
  prompt: string;
  seed?: number; //question mark "?" means its optional
};

//with optional field seed
const imagePost1: Image = {
  width: 512,
  height: 768,
  prompt: "a car",
  seed: 123456789,
};

//without optional field seed
const imagePost2: Image = {
  width: 512,
  height: 768,
  prompt: "a car",
};

const imagePost3: Image = {
  width: 512,
  height: 768,
  prompt: "",
  seed: 1238411681451351,
};

//---------------------INTERFACE (TYPE DEFINING LIKE CLASSES)---------------------//
interface TextPost {
  title: string;
  description: string;
  hash: number;
  date?: string;
}

const text1: TextPost = {
  title: "first note",
  description:
    "lorem ipsum dollar me amet in pret incididunt et justo euismod tempor inc ante ipsum dolor sit am",
  hash: 1234,
};

//----------------------------------------------------------------
type Func2 = (a: number, b: number) => void; //for console logging and non returning functions
//----------------------------------------------------------------

type Func = (a: number, b: number) => number;
//we ca extend interface just like classes unlike (type) keyword,
interface TextPostNew extends TextPost {
  owner: string;
  function: Func;
}

const text2: TextPostNew = {
  owner: "tushar",
  title: "second note",
  description: "lorem ipsum dollar me amet in pret inc",
  hash: 1234,
  function: (a: number, b: number): number => a + b,
};


console.log(text2?.function(10, 20));
