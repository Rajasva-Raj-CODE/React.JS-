import { useRef, useState } from "react";
function App() {
  const [name, setName] = useState("Rajasva");
  const refElement = useRef("");
  console.log(refElement);
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  return (
    <>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
    </>
  );
}

export default App;
