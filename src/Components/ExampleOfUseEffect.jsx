import React, { useState } from "react";
import { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";
function ExampleOfUseEffect() {
  async function fetchDataa() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("inside  useffect");
    fetchDataa();
  });

  function handleCount() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>ExampleOfUseEffec</div>
      <h1>{counter}</h1>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
}

export default ExampleOfUseEffect;
