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
