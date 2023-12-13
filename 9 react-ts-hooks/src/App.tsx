import { FormEvent, useState } from "react";
import MyForm from "./components/MyForm";
import ThemeProvider from "./components/ThemeProvider";
import Box from "./components/Box";

interface Person {
  name: string;
  age: number;
}

//useContext hook in typescript

function App() {
  const [value, setValue] = useState<string | number>("");
  const [person, setPerson] = useState<Person>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(person);
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div>
        {/* 1. normal use state form */}
        <MyForm label="" setter={setValue} value={value} />

        {/* 2. interface form */}
        <form
          className=" border-2 border-yellow-500 m-6"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            required
            placeholder="age"
            className="border-2 border-red-950"
            value={person?.age || 0}
            onChange={(e) =>
              setPerson((prev) => ({ ...prev!, age: Number(e.target.value) }))
            }
          />
          <input
            type="text"
            required
            placeholder="name"
            className="border-2 border-red-950"
            value={person?.name || ""}
            onChange={(e) =>
              setPerson((prev) => ({ ...prev!, name: e.target.value }))
            }
          />
          <button type="submit">Submit</button>
        </form>

        {/* 3. useContext hook with typescript */}
        <ThemeProvider>
          <Box />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
