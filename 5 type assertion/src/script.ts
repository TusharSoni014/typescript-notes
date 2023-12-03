//----------------------------------------------------------------------------------//
//----------------------TYPER ASSERTION (DOM MANIPULATION)--------------------------//
//----------------------------------------------------------------------------------//

//type assertions means dom manipulation me hm varialble ko bta rhe h ki ye element confirm exist kr rha h aur kis form me like htmlElement etc

const para = document.querySelector(".para");
//hovering on para says, it can be "HTMLElement | null"

//---------------------------------------------------------//
//--------------- 3 TYPES OF ASSERTIONS -------------------//
//---------------------------------------------------------//
const typePara1 = <HTMLElement>document.querySelector(".para");
//Using angle brackets (< > syntax)

const typePara2 = document.querySelector(".para") as HTMLElement;
//Using the as keyword

const typePara3 = document.querySelector(".paras")!;
// (!) Non-null assertion operator
//compiler ko ye bta rhe h ki element confirmed hai ki null ya undefined nhi hoga

const imgElement = document.querySelector("#img-element") as HTMLImageElement;
//be more specific as possible while defining type assertions
imgElement.src = "123465789";

//with form elements
const form = document.querySelector(".my-form") as HTMLFormElement;
const searchBox = document.querySelector(
  ".my-form .search-input"
) as HTMLInputElement;

// form.onsubmit = (e) => {
//   e.preventDefault();
//   alert(searchBox.value);
// };

//SubmitEvent is optional
// form.onsubmit = (e:SubmitEvent) => {
//   e.preventDefault();
//   alert(searchBox.value);
// };

///----------------- Adding Number history ------------------//
const historyContainer = document.querySelector(".history") as HTMLElement;
form.onsubmit = (e) => {
  e.preventDefault();
  const value = Number(searchBox.value) + 20;
  const element = document.createElement("p");
  element.innerHTML = String(value);
  historyContainer.appendChild(element);
};

//-------------------------------------------------------------//
//--------------- TYPES ASSERTION IN OBJECT -------------------//
//-------------------------------------------------------------//

interface Person {
  name: string;
  age: number;
  gender: boolean;
  height: number;
}

const person1: Person = {
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

// function getData(key: string) {
//   return person1[key];
// }
//can't pass key as argument, kyuki typescript ko nhi pata ki argument me kya pass hoga, string, number, boolean, kuch bhi pass ho skta h esliye allow nhi krta.

//to fix this problem, we will set the interface or type alias to dynamic

interface NewPerson {
  [key: string]: string;
  //key will be string and value will be string as well
}

const person2: NewPerson = {
  name: "tush",
  // age:21 //cant asign number to value
  gender: "male",
};

function getData2(key: string) {
  return person2[key];
}
console.log(getData2("name"));
console.log(getData2("lol"));
//dynamic key value pair se problem ye hai ki, this cannot see if the given key exist in the object or not.

//----------------------------------------------------------------------//

interface Influencer {
  name: string;
  email: string;
  age: number;
  followers: number;
}

const tushar: Influencer = {
  age: 21,
  name: "tushar",
  followers: 50000,
  email: "tushar@gmail.com",
};

const getDetailsOptions = (key: "name" | "email" | "age" | "followers") => {
  return tushar[key];
};

getDetailsOptions("age");
//will show the written suggestions

//-------------- OR --------------//

const getDetailsWithKeys = (key: keyof Influencer) => {
  return tushar[key];
};

getDetailsWithKeys("age");
//will loop over the keys and show the suggestions of all of keys

//----------------------------------------------------------------------//

let key = "name";
console.log(tushar[key as keyof Influencer]); //if we have interface
console.log(tushar[key as keyof typeof tushar]); //if we dont have interface
//typeof tushar gives us the type of the object means, Influencer here, so it will be beneficial if we dont know what interface is used to make the object


