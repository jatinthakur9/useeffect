import React, { useEffect, useState } from "react";

function CleanupFunctionDemo() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("effect a callback");

    return function () {
      console.log("cleanup function");
    };
  }, []);

  return (
    <div>
      <h1>Counter : {counter}</h1>

      <button
        onClick={() => {
          setCounter((prevValue) => prevValue + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default CleanupFunctionDemo;
