//normal function generics
function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

//arrow function generics
const getFirstElementArray = <Element>(array: Element[]) => {
  return array[0];
};

//pass in array of numbers it returns a number automatically.
const numbers = [1, 2, 3];
const number = getFirstElement(numbers);

//pass in array of strings it returns a single string automatically.
const strings = ["a", "b", "c", "d", "e"];
const string = getFirstElement(strings);

//generics while selecting dom elements
// const input = document.querySelector<HTMLInputElement>(".input-elem");
// const value = input?.value;

//generics in MAPS
const map = new Map<string, number>();
map.set("map", 123);

const map2 = new Map<string, Map<string, number>>();
map2.delete("");

//generics for api response
type ApiResponse<DataType = { status: number }> = {
  data: DataType;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string }>;

const userResponse: UserResponse = {
  data: { age: 21, name: "hello" },
  isError: false,
};

const blogResponse: BlogResponse = {
  data: { title: "sfasf" },
  isError: false,
};

const defaultResponse: ApiResponse = {
  data: { status: 200 },
  isError: false,
};

//overwriting the defaule generic
const overwriteResponse: ApiResponse<{ name: string }> = {
  data: { name: "awdaw" },
  isError: false,
};

//must be a type of object or whatever
//{ status: number } is a default value
type MyApiResponse<T extends object = { status: number }> = {
  data: T;
  isError: boolean;
};

const newResponse: MyApiResponse = {
  data: { status: 200 },
  isError: false,
};

const newResponseModified: MyApiResponse<{ data: boolean }> = {
  data: { data: true },
  isError: false,
};
