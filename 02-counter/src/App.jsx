import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 0;

  const increaseValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const decreaseValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1> Vite React Counter App</h1>
      <h3> Counter : {counter}</h3>
      <button onClick={increaseValue}> Increase Value</button>
      <br />
      <button onClick={decreaseValue}> Desrease Value</button>
    </>
  );
}

export default App;
