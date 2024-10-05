import { useState } from "react";
import Content from "./components/Content";

function App() {
 const [name , setName] = useState("");
 const [email , setEmail] = useState("");

 console.log('render');

  // const submitData = () => {
  //   console.log(name, email);
  //   // console.log(a);
  // }

  const submitData = (name, email) => {
    console.log(name, email);
    // console.log(a);
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
      </input>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      >
      </input>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={() => submitData(name, email)}>Submit</button>

      <Content />
    </div>
  );
}

export default App;
