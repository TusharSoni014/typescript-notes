import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrease, increase } from "./redux/slices/numberSlice";

function App() {
  const count = useSelector((state: RootState) => state.numberSlice.count);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-screen bg-slate-600 text-white p-3 flex justify-center items-center flex-col">
      <div className="__heading text-4xl font-bold flex flex-col gap-3">
        <h1>Typescript + Redux Toolkit</h1>
        <h1 className="text-center">Count: {count}</h1>
      </div>
      <div className="__btn_container flex gap-2 my-3">
        <button
          className="bg-slate-700 transition rounded p-3 hover:bg-slate-800 active:scale-[0.95]"
          onClick={() => dispatch(increase())}
        >
          increase
        </button>
        <button
          className="bg-slate-700 transition rounded p-3 hover:bg-slate-800 active:scale-[0.95]"
          onClick={() => dispatch(decrease())}
        >
          decrease
        </button>
      </div>
    </div>
  );
}

export default App;
