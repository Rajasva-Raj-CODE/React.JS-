import React from "react";
import ChildToParent from "./ChildToParent";

const LiftingStateUp = () => {
//   let user = "Rajasva Raj";
  function sayHello(n) {
    alert("hello"+n)
  }
  return (
    <div>
      <h2>LiftingStateUp</h2>
      {/* <ChildToParent item={user} /> */}
      <ChildToParent item={sayHello} />
    </div>
  );
};

export default LiftingStateUp;
