import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count +1 } 
    case 'decrement':
      return {count: state.count -1 }
    case 'multiply':
      return {count: state.count *2 }
    case 'reset':
      return {count: state.count +5 }
    default:
      return state 
  }
  
}


function UseReducer() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0})


  function increment(){
    dispatch({ type: 'increment'})
  }

  function decrement(){
    dispatch({ type: 'decrement'})
  }

  function multiply(){
    dispatch({ type: 'multiply'})
  }

  function reset(){
    dispatch({ type: 'zero'})
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <button onClick={multiply}>x</button>
      <button onClick={reset}>0</button>
    </div>
  );
}

export default UseReducer;