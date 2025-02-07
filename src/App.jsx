import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function addValue() {
    counter = counter + 1;
    console.log("Add value button clicked, value = ", counter);
    setCounter(counter);
  }

  function removeValue() {
    if (counter !== 0) {
      counter = counter - 1;
      console.log("Remove value button clicked, value = ", counter);
      setCounter(counter);
    } else {
      console.log("Remove value button clicked, value = ", counter);
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  );
}

export default App;
