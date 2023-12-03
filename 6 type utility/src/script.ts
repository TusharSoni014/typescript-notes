//------------------------------------------------------------//
//----------------------TYPE UTILITY--------------------------//
//------------------------------------------------------------//

//--------------- Partial <Type> -------------------//
//to make the type variables optional if they are mandatory

type User = {
  name: string;
  email: string;
};

type NewUser = Partial<User>;

const user1: NewUser = {};

//--------------- Required <Type> -------------------//
//to make the type variables mandatory if they are optional (opposite of partial)

type User3 = Required<NewUser>;

const user2: User3 = {
  email: "email@gmail.com",
  name: "name",
};

//better way of writing partials,
//directly convert instead of creating another new type.
const user3: Required<NewUser> = {
  email: "email@gmail.com",
  name: "name",
};

//--------------- Readonly <Type> -------------------//
//to make everything readonly, once defined, it cannot be changed

const user4: Readonly<NewUser> = {
  email: "email@gmail.com",
  name: "name",
};

//mixing utility functions
const user5: Required<Readonly<NewUser>> = {
  email: "email@gmail.com",
  name: "name",
};

//--------------- Record <Keys, Type> -------------------//
//to mix two types in one place

type Userinfo = {
  age: number;
};

type UserName = "person 1" | "person 2" | "person 3" | "person 4";

const groupUsers: Record<UserName, Userinfo> = {
  "person 1": { age: 12 },
  "person 2": { age: 12 },
  "person 3": { age: 12 },
  "person 4": { age: 12 },
};
