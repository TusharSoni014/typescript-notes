//-------------------------------------------------------//
//----------------------FUNCTIONS------------------------//
//-------------------------------------------------------//

type Func = (a: number, b: number) => number;

const add: Func = (a, b) => {
  return a + b;
};

//----------------------OPTIONAL ARGUMENTS AND TYPE GUARDS------------------------//

type Func2 = (a: number, b: number, c?: number) => number;

//optional parameter
const mul: Func2 = (a, b, c) => {
  if (typeof c === "undefined") return a * b; //TYPEGUARDS
  return a * b * c;
};
// console.log(mul(4, 2, 6));

//default parameter
const mul2: Func2 = (a, b, c = 20) => {
  return a * b * c;
};
// console.log(mul2(1, 2));

//----------------------REST OPERATORS AND ARGUMENTS ARRAY------------------------//

type RestOperators = (...arg: number[]) => number;

const anyFunc: RestOperators = (...a) => {
  const result = a.reduce((a, b) => a + b);
  return result;
};

console.log(anyFunc(1, 2, 3, 4, 5, 6, 7));

const anyfun2: RestOperators = function (...a) {
  const result = a.reduce((a, b) => a + b);
  return result;
};

//----------------------OBJECTS IN TYPESCRIPT------------------------//

const getProduct = (product: {
  name: string;
  stock: number;
  price: number;
}) => {
  console.log(product);
};

//correct way to do it (interface are like classes)
interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string; //readonly, define krne ke baad change nhi kr skte
}

type GetProduct = (product: Product) => void;

const getProduct2: GetProduct = (product) => {
  // product.id="11122333"
  //cant change id because its readonly
  console.log(product);
};

const product1: Product = {
  name: "samsung phone",
  stock: 2,
  price: 999,
  photo: "pic url",
  id: "123456789",
};

getProduct2(product1);

//----------------------NEVER AND OPTIONAL INPUTS------------------------//


//when we throw error in a function it returns a never type
const errorHandler = ():never => {
  throw new Error("hehe, kaam nhi ho paya");
};



//optional values
type ThemeMode = "light" | "dark"
const activeTheme:ThemeMode = "light" //it will show suggestion of light or dark theme
