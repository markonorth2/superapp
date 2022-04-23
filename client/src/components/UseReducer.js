import React, { useState } from 'react';

function UseReducer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function changeCount(amount) {
    setCount(prevCount => prevCount + amount)
  }

  function resetCount() {
    setCount(0)
  }
  return (
    <div>
     <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => resetCount()}>Reset</button>
    </div>
  );
}

export default UseReducer;