import React, { useReducer, useState } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    let { type } = action;
    if(type == "Increase"){
        return state + 1
    }

    if(type == "Decrease"){
        return state-1
    }
    return state;
  };

  // const [count,setCount] = useState(0)

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increase" });
        }}
      >
        Add Count
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrease" });
        }}
      >
        Subtract Count
      </button>
    </>
  );
};

export default UseReducer;
