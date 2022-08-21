import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  // action = {type, payload}
  const { type, payload } = action;
  switch (type) {
    case 'increment':
      return state + payload;
    case 'decrement':
      return state - payload;

    default:
      return state;
  }
};

export const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  //   const [counter, setCounter] = useState(0);
  const increment = () => {
    return {
      type: 'increment',
      payload: 2,
    };
  };
  const decrement = () => {
    return {
      type: 'decrement',
      payload: 2,
    };
  };

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
};
