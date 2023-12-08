import Box from "./components/Box";
import { useState } from 'react'
import Box2 from "./components/Box2";


function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <div>
        <Box heading="this is heading" />
        <Box2 color="red" heading="this is second heading" count={count} func={() => alert("hehe")} />
        <button className=" bg-lime-600" onClick={() => setCount(prevState => prevState + 1)}>increase</button>
      </div>
    </>
  );
}

export default App;
