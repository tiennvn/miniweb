import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)

  const increaseClick = () => {
    console.log("clicked")
    setCounter(counter + 1)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={increaseClick}>Increase</button>
    </div>
  );
}

export default App;
