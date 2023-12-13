import { Dispatch, SetStateAction } from "react";

interface Form<T> {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
  //copy from hovering the text from parent element
}
type InputVal = string | number;

const MyForm = <T extends InputVal>({ label, value, setter }: Form<T>) => {
  return (
    <form>
      <label htmlFor="search-input">{label}</label>
      <input
        type="text"
        id="search-input"
        value={value}
        placeholder="search text..."
        className=" border-2 border-gray-500 p-2"
        onChange={(e) => setter(e.target.value as T)}
      />
    </form>
  );
};

export default MyForm;
