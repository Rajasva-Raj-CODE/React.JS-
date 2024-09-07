import { useCallback, useState } from "react";
import ChlidA from "./ChlidA";

function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learning = useCallback(() => {}, [add]);
  return (
    <>
      <h1>Learning UseCallBack</h1>
      <ChlidA Learning={Learning} count={count} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Additon</button>
      <br /> <br />
      <br />
      <button onClick={() => setCount(count + 3)}>count</button>
      <h1>{count}</h1>
    </>
  );
}

export default App;
