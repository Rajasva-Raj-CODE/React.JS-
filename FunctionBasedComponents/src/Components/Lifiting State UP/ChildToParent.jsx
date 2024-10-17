import React from "react";

const ChildToParent = (prop) => {
    let user="Tejsvi"
  return (
    <>
      {/* <h2>Name:{prop.item}</h2> */}
      <h2>Name</h2>
      <button onClick={()=>prop.item(user)}>Click</button>
    </>
  );
};

export default ChildToParent;
