import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count +1 } 
    case 'decrement':
      return {count: state.count -1 }
    case 'multiply':
      return {count: state.count *2 }
    case 'divide':
      return {count: state.count /2} 
    case 'reset':
      return {count: state.count =0 }
    case 'boom':
      return {count: state.count +10000}
    case 'doom':
      return {count: state.count -10000}
    case 'superdoom':
      return {count: state.count -1000000}
    case 'superboom':
      return {count: state.count +1000000}
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
    dispatch({ type: 'reset'})
  }
  function boom(){
    dispatch({ type: 'boom'})
  }
  function superboom(){
    dispatch({ type: 'superboom'})
  }
  function divide(){
    dispatch({ type: 'divide'})
  }
  function doom(){
    dispatch({ type: 'doom'})
  }
  function superdoom(){
    dispatch({ type: 'superdoom'})
  }
  


  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <button onClick={multiply}>x</button>
      <button onClick={divide}>/</button>
      <button onClick={reset}>0</button>
      <button onClick={boom}>boom</button>
      <button onClick={doom}>doom</button>
      <button onClick={superdoom}>superdoom</button>
      <button onClick={superboom}>superboom</button>

     
    </div>
  );
}

export default UseReducer;