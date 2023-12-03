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

//--------------- Pick <Keys, Type> -------------------//
//pick se hm ek interface ya type se specific keys le skte h to create a sub type for example.

interface OrderInfo {
  product: string;
  name: string;
  state: string;
  country: string;
  phoneNumber: number;
  status: string;
}

const orderLocation: Pick<OrderInfo, "country" | "state" | "status"> = {
  country: "india",
  state: "rajasthan",
  status: "pending",
};
// pick se sirf ye required chize hmne nikal li
// we can make another type or interface also, taki hmko yha lamba code na likhna pde

//--------------- Omit <Keys, Type> -------------------//
//opposite of pick, removes the keys we write from a interface or type

const orderLocations: Omit<OrderInfo, "country" | "state" | "status"> = {
  name: "product 1",
  phoneNumber: 123456789,
  product: "macbook",
};

//--------------- Exclude <Type, ExcludedUnion> -------------------//
//exclude a perticular value type from a Type Union or types.

type UnionType = string | number | boolean | null | undefined;
type ExcludedUtility = Exclude<UnionType, boolean>; //will give string and number only

//--------------- NonNullable <Type> -------------------//
//removes the null and undefined types from a interface or type structure

type NonNullableExample = NonNullable<UnionType>; //return all the values instead of null and undefined

//--------------- Parameters <Type> -------------------//
//to find the types of parameters in a given function

const addition = (a: number, b: string): void => {
  console.log(a + b);
};

type ParametersExample = Parameters<typeof addition>;
//given function dala, and uske parameters ke types ka array show hoga hover krne pr, ParametersExample pr

//--------------- ConstructorParameters <Type> -------------------//
//to find the types of parameters in a given class constructor

class Person {
  constructor(
    public name: string,
    public age: number,
    public rollnumber: number
  ) {}
}
type ClassConstructorType = ConstructorParameters<typeof Person>;


//--------------- ReturnType <Type> -------------------//
//to find the types of return type in a given function

type ReturnTypeExample = ReturnType<typeof addition>