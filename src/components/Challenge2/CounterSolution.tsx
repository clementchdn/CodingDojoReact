import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prevValue) => ++prevValue);
  }

  return (
    <div>
      <p>
        This simple component displays a counter that is incremented everytime
        you click
        <button onClick={incrementCounter}> here </button>. Count: {counter}
      </p>
    </div>
  );
}
