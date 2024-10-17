import React, { useState } from "react";

const ControlledComp = () => {
  const [item, setItem] = useState("hjhjh");
  return (
    <>
      <h2>ControlledComp</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <h3>Value:{item}</h3>
    </>
  );
};

export default ControlledComp;
