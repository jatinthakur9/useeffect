import { useState } from "react";
import "./App.css";
import CleanupFunctionDemo from "./Components/CleanupFunctionDemo";
// import ExampleOfUseEffect from "./Components/ExampleOfUseEffect";
import FetchDataExample from "./Components/FetchDataExample";
import MouseMoveEvent from "./Components/MouseMoveEvent";

function App() {
  const [showComponent, setShowComponenet] = useState(true);
  return (
    <div>
      {/* <h1>app</h1> */}
      {/* <ExampleOfUseEffect /> */}
      {/* <FetchDataExample /> */}
      <label htmlFor="showComponent">showComponent </label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => setShowComponenet(!showComponent)}
      />

      {showComponent && <MouseMoveEvent />}
    </div>
  );
}

export default App;
