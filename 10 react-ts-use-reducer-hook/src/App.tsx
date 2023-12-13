import { useReducer } from "react";

type StateType = {
  count: number;
};
type ActionType =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number };

const initialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (): void => {
    dispatch({
      type: "INCREMENT",
      payload: 1,
    });
  };

  const decrement = (): void => {
    dispatch({
      type: "DECREMENT",
      payload: 1,
    });
  };
  return (
    <>
      <div>
        <h1>{state.count}</h1>
        <button className="__btn border-2 border-red-500 p-3 m-3" onClick={increment}>Increase</button>
        <button className="__btn border-2 border-red-500 p-3 m-3" onClick={decrement}>Decrease</button>
      </div>
    </>
  );
}

export default App;
