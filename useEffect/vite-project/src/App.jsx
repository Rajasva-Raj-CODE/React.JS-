import { useState, useEffect } from "react";

function App() {
  const [count, setCounter] = useState(0);
  const [data, setData] = useState("Ram");

  useEffect(() => {
    console.log("compounted mounted");
  },[data]);

  function updateCount() {
    setCounter(count + 1);
  }

  function updateData(){
    setData("seeta")
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={updateCount}>CLICK</button>
      <button onClick={updateData}>UpdateData</button>
    </>
  );
}

export default App;
