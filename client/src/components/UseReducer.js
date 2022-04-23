import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  return {count: state.count +1} 
}


function UseReducer() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0})


  function increment(){
    dispatch()
  }

  function decrement(){

  }


  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>-</button>
    </div>
  );
}

export default UseReducer;