//----------------------------------------------------------//
//---------------------- GENERICS --------------------------//
//----------------------------------------------------------//

//ek tarah se templetes in types, or functions

const func = <CustomType>(a: CustomType): CustomType => {
  return a;
};
//CustomType is a placeholder here for the types of input given inside the function

const result1 = func(10); //detectes as number
const result2 = func("str"); //detectes as string
const result3 = func(true); // detectes as boolean

result1.toFixed(2);
result2.split("");
result3.valueOf();
//will show relevant methods on dot

//--------------------------------//
// common placeholder for generic functions is T
const func2 = <T>(a: T): T => {
  return a;
};

type Person = {
  name: string;
  age: number;
};

const person1: Person = {
  age: 21,
  name: "tushar",
};

const result4 = func(person1);
result4.name;
result4.age;
//it will show the result object suggestions after the dot

//---------------------------//
//good practice
const result5 = func<Person>(person1);

//--------------------------------//
// generics in arrays
const array1: Array<string> = ["a", "b", "c", "d", "e"];

//--------------------------------//
// multiple generics
const func3 = <T, U>(a: T, b: U) => {
  return { a, b };
};

//output type me object ke andr output kaisa hoga uska type define kr skte hai
const func4 = <T, U>(a: T, b: U): { a: T; b: U } => {
  return { a, b };
};

const value = func3<number, string>(20, "hie");
console.log(value);
value.a;
value.b;

//--------------------------------//
// type extends like class

const func5 = <T, U extends T>(a: T, b: U) => {
  return { a, b };
};

const value2 = func5<number, number>(12, 15);

//example, person2 has all the fields of person1
type Person1 = {
  name: string;
  age: number;
};

type Person2 = {
  name: string;
  age: number;
  email: string;
};

const insaan1: Person1 = {
  age: 20,
  name: "hero",
};

const insaan2: Person2 = {
  age: 21,
  email: "email@hero.com",
  name: "heroooo",
};

const func6 = <Person1, Person2>(a: Person1, b: Person2) => {
  return { a, b };
};

const value3 = func6<Person1, Person2>(insaan1, insaan2);

//example 2
const users: Person1[] = [
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

const filterPeople = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((element) => element[property] === value);
};
//first array type will be of T

// second argument me hmre pss T type ka object aaya h for example, toh uski keys chaeye hame, yani ki uski keys, so hm T se extend krege U ko with uski keys only.

//value rhegi array[property] yani ki object ki perticular value.

const filteredPeopleByName = filterPeople(users, "name", "insaan 3");
const filteredPeopleByAge = filterPeople(users, "age", 24);

console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);
