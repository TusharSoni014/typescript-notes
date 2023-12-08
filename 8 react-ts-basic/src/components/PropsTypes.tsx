type TextData = {
  heading: string;
  color: string;
  count?: number;
  func?: () => void;
  func2: (variable: string) => void;
};

// default prop hai ye count
export default function PropsTypes({
  heading,
  color,
  count = 5,
  func2,
}: TextData) {
  func2("hello"); //optional functions cannot be called directly, need to make them required
  return (
    <div className=" border-2 border-red-500 my-3">
      <p>heading: {heading}</p>
      <p>color: {color}</p>
      <p>count: {count}</p>
    </div>
  );
}
