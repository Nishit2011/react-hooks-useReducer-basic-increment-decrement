import React, { useReducer } from "react";
import "./styles.css";

const initialState = 0;

//2. reducer function will accept state and action
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export default function App() {
  //1. step to invoke useReducer and pass reducer and initialState
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <p>{count}</p>
    </div>
  );
}
