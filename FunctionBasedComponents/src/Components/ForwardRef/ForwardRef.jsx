import React, { useRef } from "react";
import ChildForwardref from "./ChildForwardref";

const ForwardRef = () => {
  const myRef = useRef();
  function updateinput() {
    myRef.current.value = "Raj";
  }
  return (
    <div>
      <ChildForwardref ref={myRef} />
      <button onClick={() => updateinput()}>Click</button>
    </div>
  );
};

export default ForwardRef;
