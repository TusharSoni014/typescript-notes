import { useState } from "react";
import BasicProps from "./components/BasicProps";
import PropsTypes from "./components/PropsTypes";
import ReactNodeChildren from "./components/ReactNodeChildren";
import Generics from "./components/Generics";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>
        {/* ---- 1. basic props ---- */}
        <BasicProps heading="this is heading" />

        {/* ---- 2. props as types define ---- */}
        <PropsTypes
          color="red"
          heading="this is second heading"
          count={count}
          func={() => alert("hehe")}
          func2={(a: string) => console.log(a)}
        />
        <button
          className=" bg-lime-600"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          increase
        </button>

        {/*--- 3.1. ONE WAY OF SENDING CHILDREN ---*/}
        <ReactNodeChildren
          children={
            <>this is child component being sent as children ReactNode</>
          }
        />

        {/*--- 3.2. ANOTHER WAY OF SENDING CHILDREN ---*/}
        <ReactNodeChildren>
          'children' KEYWORD IS RESERVED FOR REACT
          <button className="bg-slate-400">click here</button>
        </ReactNodeChildren>

        {/*--- 4. Generics in React TS ---*/}
        <Generics />
      </div>
    </>
  );
}

export default App;
