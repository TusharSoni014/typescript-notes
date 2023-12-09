interface MyForm<T> {
  label: string;
  value: T;
  onChange: () => void;
}

type InputTypeVal = string | number;

export default function Generics<T extends InputTypeVal>({
  label,
  value,
  onChange,
}: MyForm<T>) {
  return (
    <form>
      <label>{label}</label>
      <input
        placeholder="type your search here"
        className=" border-2 border-black mx-3 outline-none"
        value={value}
        type="text"
        name=""
        id=""
        onChange={onChange}
      />
    </form>
  );
}
